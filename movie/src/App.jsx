import { useState } from "react";
import Header from "./component/Header";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Events from "./pages/Events";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Movieticket from "./pages/Movieticket";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Movies from "./pages/Movies";
import Eventsticket from "./pages/Eventsticket";
import Newmovie from "./pages/Newmovie";
import { Booking } from "./pages/Booking";
// import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/watchlist" element={<Watchlist />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/movieticket" element={<Movieticket />}></Route>
        <Route path="/eventsticket" element={<Eventsticket />}></Route>
        <Route path="/newmovie" element={<Newmovie />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
       
      </Routes>
    </>
  );
}

export default App;
