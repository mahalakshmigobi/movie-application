const { default: mongoose } = require("mongoose");


//creating schema &model
const Schema=mongoose.Schema

const movies=new Schema({
movie_id:{
    type:String
},
title:{
    type:String
},   
description:{
    type:String
},
lanuage:{
    type:String
},   
release_date:{
    type:Date
}

});
module.exports=mongoose.model('movies',movies);