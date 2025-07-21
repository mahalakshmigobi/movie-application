import React, { useState } from "react";
import "../styles/Addbook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const navigate = useNavigate();
  const [users, setusers] = useState({
    name: "",
    email_id: "",
    password: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log("userd added:${users}");

    try {
      console.log(users);
      // axios.post('http://localhost:3500/dashboard/user',users);
      axios
        .post("http://localhost:3030/dashboard/user", users)
        .then((response) => navigate("/home"))
        .catch((error) => console.error("Request failed:", error));
    } catch (error) {
      console.error("error in adding signin!-${error}");
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
        <label>Name</label>
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
        Signin
      </button>
    </form>
  );
};
export default Signin;
