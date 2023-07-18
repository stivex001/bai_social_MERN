import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await login(inputs);
      setIsLoading(false);
      navigate("/")
    } catch (err) {
      setErr(err.response?.data);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Welcome to Baiconnect! Connect with friends and share your life
            moments. Please enter your login details to access your account.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <p style={{ color: "red" }}>{err && err}</p>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleLogin}>
              {isLoading ? "Please wait....." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
