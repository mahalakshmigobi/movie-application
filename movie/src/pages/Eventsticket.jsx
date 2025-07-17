// import React from 'react'
// import '../styles/Addbook.css'

// export const Eventsticket = () => {
//   return (
//     <>
     
//      <div className="container">
//         <h1>Movie Ticket Booking</h1>

       
       
//             <label >Select Movie</label>
//             <select id="movie">
//                 <option value="Alt+tab life of Ram">Alt+tab life of Ram</option>
//                 <option value="Karthik Live in Trichy">Karthik Live in Trichy</option>
//                 <option value="Baker OP in The House">Baker OP in The House</option>
//                 <option value="The Under 25">The Under 25</option>
//                 <option value="GOAbhishek UpmanyuAT">Abhishek Upmanyu</option>
//                 <option value="OML Comedy">OML Comedy</option>
//             </select>
       

      
//         <div className="section" id="dateSection">
//             <label >Select Date</label>
//             <input type="date" id="date"/>
//         </div>

      
//         <div className="section" id="timeSection">
//             <label>Select Time</label>
//             <select id="time">
//                 <option value="12:00 PM">12:00 PM</option>
//                 <option value="03:00 PM">03:00 PM</option>
//                 <option value="06:00 PM">06:00 PM</option>
//             </select>
//         </div>

       
//         <div className="section" id="seatSection">
//             <label>Number of Seats</label>
//             <input type="number" id="seats" min="1" max="10" value="1"/>
//         </div>

      
//         <button id="proceedButton">Proceed to Payment</button>

   
//         <div id="paymentSection" className="section">
//             <h3>Payment Details</h3>
//             <label >Card Number</label>
//             <input type="text" id="cardNumber" placeholder="Enter your card number"/>

//             <label >CVV</label>
//             <input type="text" id="cvv" placeholder="Enter CVV"/>

//             <button id="payButton">Pay Now</button>
//         </div>

       
//         <div id="confirmationSection" className="section" >
//             <h2>Booking Confirmed!</h2>
//             <p id="confirmationDetails"></p>
//         </div>
//     </div>

   

//     </>
//   )
// }
// export default Eventsticket


//new
// import React from 'react'
// import '../styles/Eventsticket.css'
// export const Eventsticket = () => {
//     const handlesubmit=()=>{

//     }
//   return (
//     <>
//       <form className='form container' onSubmit={handlesubmit}>
//      <section className="form-group">
//         <h1>Movie Ticket Booking</h1>

      
//         <div className="section" id="movieSection">
//             <label >Select Movie</label>
//             <select  className='form-input' required>
//                 <option value="Labur panthu" >Labur panthu</option>
//                 <option value="Lucky baskar">Lucky baskar</option>
//                 <option value="Meiyalagan">Meiyalagan</option>
//                 <option value="Kadai ulaga por">Kadai ulaga por</option>
//                 <option value="GOAT">GOAT</option>
//                 <option value="Vazlai">Vazlai</option>
//             </select>
//         </div>

      
//         <div className="section" id="dateSection">
//             <label >Select Date</label>
//             <input type="date" id="date" required className='form-input' />
//         </div>

      
//         <div className="section" id="timeSection">
//             <label>Select Time</label>
//             <select id="time"className='form-input'required >
//                 <option value="12:00 PM" >12:00 PM</option>
//                 <option value="03:00 PM">03:00 PM</option>
//                 <option value="06:00 PM">06:00 PM</option>
//             </select>
//         </div>

       
//         <div  id="seatSection" className="form-group">
//             <label>Number of Seats</label>
//             <input type="number" id="seats" required className='form-input' min="1" max="10" value="1"/>
//         </div>

      
//         {/* <button id="proceedButton">Proceed to Payment</button> */}

   
//         <div id="paymentSection" className="section">
//             <h3>Payment Details</h3>
//             <label >Card Number</label>
//             <input type="text" id="cardNumber"required className='form-input'  placeholder="Enter your card number"/>

//             <label >CVV</label>
//             <input type="text" id="cvv" required className='form-input'  placeholder="Enter CVV"/>

//             <button id="payButton">Pay Now</button>
//         </div>

       
//         {/* <div id="confirmationSection" className="section" >
//             <h2>Booking Confirmed!</h2>
//             <p id="confirmationDetails"></p>
//         </div> */}
//     </section>
// </form>
   

//     </>
//   )
// }
// export default Eventsticket
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
        .post("http://localhost:3030/dashboard/booking", bookings)
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