//creating controller
const bookings=require('../model/bookingmodel');

const getallbooking=async(req,res)=>{
   const bookinglist=await bookings.find({});
    res.status(200).json(bookinglist);
};


const createbooking=async(req,res)=>{
    const {booking_id,movie,show_time,customer_id,booking_date,seat_no,}= req.body;
          const bookingcre= await bookings.create({
            booking_id,
             movie,
            show_time,
            customer_id,
            booking_date,
            seat_no,
            
          });
          res.status(200).json(bookingcre);
        }; 

module.exports={getallbooking,createbooking};