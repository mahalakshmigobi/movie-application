
//new

import React, { useState } from 'react'
import '../styles/Addbook.css';
import axios from 'axios';
import {useNavigate}from 'react-router-dom'
export const Movieticket = () => {
const [bookings,setbookings]=useState({
movie:"",
booking_date:"",
show_time:"",
seat_no:""
});
 const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
       
      
        try{
           console.log(bookings);
            
            axios.post('https://movie-apply.onrender.com/dashboard/booking', bookings)
       .then(response => console.log(response))
       .catch(error => console.error('Request failed:', error));
        navigate('/');
            }
            catch (error){
            console.error('error in adding movieticket!-${error}' );
            }
    }
    const handlechange=(e)=>{
        const{name,value}=e.target;
        //spraead operator
        setbookings({
            ...bookings,
            [name]:value,
        })
    }
  return (
    <form className='form-container' onSubmit={handlesubmit} >
    <section className='form-group'>
      <label>select movie</label>
       <select
          className="form-input"
          name="movie"
          value={bookings.movie}
          onChange={handlechange}
        >
        <option value="disabled selected">select movie</option>
         <option value="labur pandhu">labur pandhu</option>
          <option value="Lucky baskar">Lucky baskar</option>
                <option value="Meiyalagan">Meiyalagan</option>
                 <option value="Kadai ulaga por">Kadai ulaga por</option>
                 <option value="GOAT">GOAT</option> 
                  <option value="Vazlai">Vazlai</option>
      </select>
    </section>

    <section className='form-group'>
      <label>Date</label>
      <input type="date" name="booking_date"  required className='form-input' onChange={handlechange}/>
    </section>
    
    <section className='form-group'>
      <label>select Time</label>
       <select
          className="form-input"
          onChange={handlechange}
          name="show_time"
          value={bookings.show_time}
        >
        <option value="disabled selected">select Time</option>
         <option value="9AM" >9AM</option>
          <option value="12PM">12PM</option>
                <option value="3PM">3PM</option>
                 <option value="6PM">6PM</option>
                 <option value="9PM">9PM</option> 
                 
      </select>
    </section>
    <section className='form-group'>
      <label>No Of Seats</label>
     <input type="number" name="seat_no"  required className='form-input' onChange={handlechange}/>
    </section>

  <button type='submit' className='form-button'>movie booking</button>
  </form>
 
  )
}
export default Movieticket;