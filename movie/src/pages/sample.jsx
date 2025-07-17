import React, { useState } from "react";
import "../styles/Addbook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [users, setusers] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log("userd added:${users}");

    try {
      console.log(users);

      axios.get("http://localhost:3030/dashboard/user");
      alert("login successfuly");
      navigate("/signin");
    } catch (error) {
      console.error("error in adding Login!-${error}");
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    //spraead operator
    setusers({
      ...users,
      [name]: value,
    });
  };
  return (
    <form className="form-container" onSubmit={handlesubmit}>
      <section className="form-group">
        <label>User Name</label>
        <input
          type="text"
          name="name"
          value={users.name}
          required
          className="form-input"
          onChange={handlechange}
        />
      </section>

      <section className="form-group">
        <label>password</label>
        <input
          type="password"
          name="password"
          value={users.password}
          required
          className="form-input"
          onChange={handlechange}
        />
      </section>

      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};
export default Login;


////login successful navigate home page code
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login logic
    if (email === "user@example.com" && password === "password123") {
      setError("");
      alert("Login successful!");
      navigate("/home")
    } else {
      setError("Login failed. Redirecting to registration...");
      setTimeout(() => {
        navigate("/signin"); // Navigate to the registration page
      }, 2000); // Delay for user feedback
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
