//creating controller
const owner_admins=require('../model/ownermodel');

const getallowner=async(req,res)=>{
   const ownerlist=await owner_admins.find({});
    res.status(200).json(ownerlist);
};


const createowner=async(req,res)=>{
    const {email_id,password,}= req.body;
          const ownercre= await owner_admins.create({
            email_id,
            password,
            
          });
          res.status(200).json(ownercre);
        }; 

module.exports={getallowner,createowner};