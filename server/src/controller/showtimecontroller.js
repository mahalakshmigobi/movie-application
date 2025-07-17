

//creating controller
const show_times=require('../model/showtimemodel');

const getallshowtime=async(req,res)=>{
   const showtimelist=await show_times.find({});
    res.status(200).json(showtimelist);
};

//find by one//not working
const getshowtime=async(req,res)=>{
    const{id}=req.params;
    const showtimefind=await show_times.findById(id);
    res.status(200).json(showtimefind);
};

//create movie inmany//
const createshowtime=async(req,res)=>{
    const {show_id,movie_id,screen_id,show_time}= req.body;
          const showtimedes= await show_times.create({
            show_id,
            movie_id,
            screen_id,
            show_time
          });
          res.status(200).json(showtimedes);
        }; 
        module.exports={getallshowtime,getshowtime,createshowtime};