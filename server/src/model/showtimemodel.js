const { default: mongoose } = require("mongoose");


//creating schema &model
const Schema=mongoose.Schema

const show_times=new Schema({
    show_id:{
    type:String
},
movie_id:{
    type:String
},   
screen_id:{
    type:String
},
show_time:{
    type:String
}

});
module.exports=mongoose.model('show_times',show_times);
