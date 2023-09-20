import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    
    <div className="login">
      <div className="card">
        <div className="left">
        <h1> Welcome to Chat Application</h1>
      
          <h2>Don't have an account?</h2>
          <Link to="/register">
            <button>Register here</button>
          </Link>
        </div>

        
        <div className="right">
          <h3>You can chat here with people. Add pictures, comment, delete comments, browser users and follow them.</h3>
          <h1>Login Page</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required={true}
            />
            <input
              required={true}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
