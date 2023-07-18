import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const [err, setErr] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", inputs)
      setIsLoading(false)
    } catch (err) {
      setErr(err.response?.data)
    }
  }


  return (
    <div className="register">
      <div className="wrapper">
        <div className="left">
          <h1>Bai Connect.</h1>
          <p>
            Welcome to Baiconnect! Connect with friends and share your life
            moments. Please enter your login details to access your account.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <p style={{color: "red"}}>{err && err}</p>  
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handleChange} name="name" />
            <input type="text" placeholder="Username" onChange={handleChange} name="username" />
            <input type="email" placeholder="Email" onChange={handleChange} name="email" />
            <input type="password" placeholder="Password" onChange={handleChange} name="password" />
            <button type="submit">{isLoading ? "Registering...." : "Register"} </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
