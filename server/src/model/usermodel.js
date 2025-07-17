const { default: mongoose } = require("mongoose");


//creating schema &model
const Schema=mongoose.Schema

const user=new Schema({
    name:{
    type:String
},
email_id:{
    type:String
},   
password:{
    type:String
}
});
module.exports=mongoose.model('users',user);


