

//creating controller
const usermodel = require('../model/usermodel');
const user=require('../model/usermodel');

const getalluser=async(req,res)=>{
   const userlist=await user.find({});
    res.status(200).json(userlist);
};

//find by one//not working
const getuser=async(req,res)=>{
    const{id}=req.params;
    const userfind=await user.findById(id);
    res.status(200).json(userfind);
};

//create movie inmany//
const createuser=async(req,res)=>{
    const {name,email_id,password}= req.body;
          const userdes= await user.create({
            name,
            email_id,
            password
            
          });
          res.status(200).json(userdes);
        }; 
        //find one
        const createfindone=async(req,res)=>{
          const {name,email_id,password}= req.body;
          const userfindone= await user.findOne({
            name,
            email_id,
            password
            
          });
          res.status(200).json(userfindone);
        }; 
        

        module.exports={getalluser,getuser,createuser,createfindone};