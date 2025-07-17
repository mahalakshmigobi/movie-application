import React from "react";
import { Link } from "react-router-dom";

import logo1 from "../assets/image/discount.png";

import logo2 from "../assets/image/discount1.jpg";
import logo3 from "../assets/image/discount3.jpg";
export const Header = () => {
  return (
    <>
      <header
        style={{
          padding: "10px",
          background: "#333",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* <a href='#' target='_blank'>
        <img src={logo} className='logo' alt="logo" />
    </a> */}

        <div>Movie Ticket Booking Application</div>
        <nav>
          <Link to={"/home"} style={{ color: "#fff", margin: "0 10px" }}>
            Home
          </Link>
          <Link to={"/events"} style={{ color: "#fff", margin: "0 10px" }}>
            Events
          </Link>
          <Link to={"/watchlist"} style={{ color: "#fff", margin: "0 10px" }}>
            Watchlist
          </Link>

          <Link to={"/movies"} style={{ color: "#fff", margin: "0 10px" }}>
            Movies
          </Link>
          <Link to={"/signin"} style={{ color: "#fff", margin: "0 10px" }}>
            Signin
          </Link>
          <Link to={"/login"} style={{ color: "#fff", margin: "0 10px" }}>
            Login
          </Link>
          {/* <Link to={"/about"} style={{ color: "#fff", margin: "0 10px" }}>
            About
          </Link> */}
        </nav>
      </header>

      <h4>Recommended movie</h4>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={logo1}
              className="d-block w-100"
              height="400"
              width="100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={logo2}
              className="d-block w-100"
              height="400"
              width="100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={logo3}
              className="d-block w-100"
              height="400"
              width="100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <br />
        <center>
          {" "}
          <Link to="/home" className="btn btn-success">
            view the new movie
          </Link>
        </center>
        <br />
        <br />
        <center>
          {" "}
          <Link to="/booking" className="btn btn-success">
            view the booking details
          </Link>
        </center>
      </div>
    </>
  );
};
export default Header;
