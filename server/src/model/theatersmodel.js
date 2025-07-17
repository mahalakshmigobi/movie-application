const { default: mongoose } = require("mongoose");


//creating schema &model
const Schema=mongoose.Schema

const theaters=new Schema({
    theater_id:{
        type:String
    },
    address:{
        type:String  
    },
    city:{
        type:String  
    },
    name:{
        type:String  
    },
    state:{
        type:String  
    }

});
module.exports=mongoose.model('theaters',theaters);




