
import React, { useState } from "react";
import "../styles/Addbook.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [users, setusers] = useState({
    email_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Attempting login for:", users);

      axios
        .get("http://localhost:3030/dashboard/user", users)
        .then((response) => {
          const allUsers = response.data;

          if (Array.isArray(allUsers)) {
            const foundUser = allUsers.find(
              (user) =>
                user.email_id === users.email_id &&
                user.password === users.password
            );

            if (foundUser) {
              navigate("/home");
            } else {
              console.log("User not found or credentials do not match.");
              alert("Invalid email or password. Please try again.");
            }
          } else {
            console.error("Response data is not an array:", allUsers);
            alert("Unexpected server response. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Login request failed:", error);
          alert("An error occurred during login. Please try again.");
        });
    } catch (error) {
      console.error("Error in handling login:", error);
      alert("An unexpected error occurred. Please try again.");
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
        <label>Email_id</label>
        <input
          type="text"
          name="email_id"
          value={users.email_id}
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
