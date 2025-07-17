const { default: mongoose } = require("mongoose");




//creating schema &model
const Schema=mongoose.Schema

const bookings=new Schema({
    // booking_id:{
    //     type:String
    // },
      movie:{
        type:String
    },
    show_time:{
        type:String
    },
    // customer_id:{
    //     type:String
    // },
    booking_date:{
        type:Date
    },
  
    seat_no:{
        type:String
    },
});
module.exports=mongoose.model('bookings',bookings);


