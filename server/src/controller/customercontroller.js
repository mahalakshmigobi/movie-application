//creating controller
const customers=require('../model/customermodel');

const getallcustomer=async(req,res)=>{
   const customerlist=await customers.find({});
    res.status(200).json(customerlist);
};


const createcustomer=async(req,res)=>{
    const {customer_id,name,email,phone_no}= req.body;
          const customercre= await customers.create({
            customer_id,
            name,
            email,
            phone_no,
            
          });
          res.status(200).json(customercre);
        }; 

module.exports={getallcustomer,createcustomer};