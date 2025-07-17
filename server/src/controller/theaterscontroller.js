
//creating controller
const theaters=require('../model/theatersmodel');

const getalltheaters=async(req,res)=>{
   const theaterslist=await theaters.find({});
    res.status(200).json(theaterslist);
};

// //find by one//not working
// const getmovies=async(req,res)=>{
//     const{movie_id}=req.params;
//     const moviefind=await movies.findOne(movie_id);
//     res.status(200).json(moviefind);
// };

//create movie inmany//
const createtheater=async(req,res)=>{
    const {theater_id,address,city,name,state}= req.body;
          const theatercre= await theaters.create({
            theater_id,
            address,
            city,
            name,
            state ,
          });
          res.status(200).json(theatercre);
        }; 
// //update many in all //
//         // const updatemovies=async(req,res)=>{
//         //     const {movie_id,title,description,lanuage,release_date}= req.body;
//         //     const movieup=await movies.updateMany({
//         //     movie_id,
//         //     title,
//         //     description,
//         //     lanuage,
//         //     release_date,
//         //     });
//         //     res.status(200).json(movieup);
//         // };
        


//         const updatemovies=async(req,res)=>{
//             const {movie_id}= req.body;
//        const moviedel= await movies.updateOne(movie_id);
//             res.status(200).json(moviedel);  
//         };
// //delete many in particular all field required//
//         const deletemovies=async(req,res)=>{
//             const {movie_id}= req.params;
//        const moviedel= await movies.deleteOne(movie_id);
//             res.status(200).json(moviedel);  
//         };
// // const deletemovies=(req,res)=>{
// //     res.send("delete a movie");
// // };

module.exports={getalltheaters,createtheater};