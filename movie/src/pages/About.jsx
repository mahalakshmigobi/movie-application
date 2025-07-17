// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function About() {
//   const [data, setData] = useState([]);
//   // const handleGEtAllpost = async () => {
//   //   try {
//   //     const { data } = await axios.get(
//   //       "http://localhost:3030/dashboard/booking"
//   //     );
//   //     if (!data) return console.log("failed to fetch user data");
//   //     setUserData(data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3030/dashboard/booking") // Replace with your API URL
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       {/* <table>
//         <thead>
//           <th>movie</th>
//           <th>show_time</th>
//           <th>booking_date</th>
//           <th>seat_no</th>
//         </thead>
//         <tbody>
//           {userData.length === 0 ? (
//             <p>No data yet received </p>
//           ) : (
//             <>
//             {userData?.map(user)=>(
//               <>
//               <tr>
//                 <td>{user.movie}</td>
//               </tr>
//               </>
//             )}</>
//           )}
//         </tbody>
//       </table> */}
//       {loading ? (
//         <p>Loadings...</p>
//       ) : (
//         <ul>
//           {data.map((item,index) => {
//             return <li key={index}>{item.movie}</li>;
//             //  <li key={index}>{item.show_time}</li>;
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default About;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3030/dashboard/booking') // Replace with your API endpoint
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>movie</th>
          <th>show_time</th>
          <th>booking_date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,index) => (
          <tr key={index.movie}>
            <td>{item.movie}</td>
            <td>{item.show_time}</td>
            <td>{item.booking_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default About;
