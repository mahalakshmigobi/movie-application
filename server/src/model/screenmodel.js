const { default: mongoose } = require("mongoose");


//creating schema &model
const Schema=mongoose.Schema

const screens=new Schema({
    screen_id:{
        type:String
    },
    theater_id:{
        type:String
    }, 
    screen_no:{
        type:String
    },
    seatings:{
        type:String
    },
    is_researved: {
        type:String
    }

});
module.exports=mongoose.model('screens',screens);


