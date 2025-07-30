
import React, { useState } from "react";
import "../styles/Addbook.css";
import axios from "axios";
export const Eventsticket = () => {
  const [bookings, setbookings] = useState({
    movie: "",
    booking_date: "",
    show_time: "",
    seat_no: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();

    try {
      console.log(bookings);

      axios
        .post("https://movie-apply.onrender.com/dashboard/booking", bookings)
        .then((response) => console.log(response))
        .catch((error) => console.error("Request failed:", error));
    } catch (error) {
      console.error("error in adding Eventsticket!-${error}");
    }
  };
  const handlechange = (e) => {
    const { name,value } = e.target;

    setbookings({
      ...bookings,
      [name]: value,
    });
  };
  return (
    <form className="form-container" onSubmit={handlesubmit}>
      <section className="form-group">
        <label>select Events</label>
        <select
          className="form-input"
          name="movie"
          value={bookings.movie}
          onChange={handlechange}
        >
          <option value="disabled selected">select Events</option>
         <option value="Alt+tab life of Ram">Alt+tab life of Ram</option>
         <option value="Karthik Live in Trichy">Karthik Live in Trichy</option>
         <option value="Baker OP in The House">Baker OP in The House</option>
         <option value="The Under 25">The Under 25</option>
         <option value="GOAbhishek UpmanyuAT">Abhishek Upmanyu</option>
         <option value="OML Comedy">OML Comedy</option>
        </select>
      </section>

      <section className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="booking_date"
          required
          className="form-input"
          onChange={handlechange}
        />
      </section>

      <section className="form-group">
        <label>select Time</label>
        <select
          className="form-input"
          onChange={handlechange}
          name="show_time"
          value={bookings.show_time}
        >
          <option value="disabled selected">select Time</option>
          <option value="9AM">9AM</option>
          <option value="12PM">12PM</option>
          <option value="3PM">3PM</option>
          <option value="6PM">6PM</option>
          <option value="9PM">9PM</option>
        </select>
      </section>
      <section className="form-group">
        <label>No Of Seats</label>
        <input
          type="number"
          name="seat_no"
          value={bookings.seat_no}
          required
          className="form-input"
          onChange={handlechange}
        />
      </section>

      <button type="submit" className="form-button">
        movie booking
      </button>
    </form>
  );
};
export default Eventsticket;