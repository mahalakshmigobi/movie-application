// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import '../styles/Addbook.css';

// async function loginUser(credentials) {
//  return fetch('http://localhost:3030/dashboard/user', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };

////

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

    useEffect(() => {
      if (!users) {
        console.log("failed store user data");
      }
      navigate("/");
    }, [navigate]);
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log("userd added:${users}");

    try {
      console.log(users);

      axios.get("http://localhost:3030/dashboard/user", users);
    //  navigate("/signin");
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

//new code

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       // Simulate a login API call
//       const response = await fetch("http://localhost:3030/dashboard/user", {
//         method: "GET",
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       // Handle successful login (e.g., redirect to dashboard)
//       console.log("Login successful!");
//     } catch (err) {
//       setError(err.message);
//       // Navigate to the registration page on failure
//       navigate("/signin");
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;
