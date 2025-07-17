
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Booking = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3030/dashboard/Booking') // Replace with your API endpoint
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>Booking Details Table</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">

     
        <tr>
          <th>Movie</th>
          <th>Show Time</th>
          <th>Booking Date</th>
          <th>No of Seat</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.movie}</td>
            <td>{item.show_time}</td>
            <td>{item.booking_date}</td>
            <td>{item.seat_no}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default Booking;
