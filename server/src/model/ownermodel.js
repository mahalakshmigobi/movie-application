
const { default: mongoose } = require("mongoose");




//creating schema &model
const Schema=mongoose.Schema

const owner_admins=new Schema({
    email_id:{
        type:String
    },
    password:{
        type:String
    }


});
module.exports=mongoose.model('owner_admins',owner_admins);

