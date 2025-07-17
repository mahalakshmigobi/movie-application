
//creating controller
const screen=require('../model/screenmodel');

const getallscreens=async(req,res)=>{
   const screenlist=await screen.find({});
    res.status(200).json(screenlist);
};

//find by one//not working
const getscreens=async(req,res)=>{
    const{id}=req.params;
    const screenfind=await screen.findById(id);
    res.status(200).json(screenfind);
};

//create movie inmany//
const createscreens=async(req,res)=>{
    const {screen_id,theater_id,screen_no,seatings,is_researved}= req.body;
          const screendes= await screen.create({
            screen_id,
            theater_id,
            screen_no,
            seatings,
            is_researved,
          });
          res.status(200).json(screendes);
        };
        
        
module.exports={getallscreens,getscreens,createscreens};