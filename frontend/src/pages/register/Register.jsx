import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
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
          <form action="">
            <input type="text" placeholder="Name" onChange={handleChange} name="name" />
            <input type="text" placeholder="Username" onChange={handleChange} name="username" />
            <input type="email" placeholder="Email" onChange={handleChange} name="email" />
            <input type="password" placeholder="Password" onChange={handleChange} name="password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
