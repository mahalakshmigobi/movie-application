
const { default: mongoose } = require("mongoose");



//creating schema &model
const Schema=mongoose.Schema

const customers=new Schema({
    customer_id:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone_no:{
        type:String
    }

});
module.exports=mongoose.model('customers',customers);
