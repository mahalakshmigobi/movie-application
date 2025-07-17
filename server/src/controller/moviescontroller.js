
//creating controller
const movies=require('../model/moviesmodel');

const getallmovies=async(req,res)=>{
   const movielist=await movies.find({});
    res.status(200).json(movielist);
};

//find by one//not working
const getmovies=async(req,res)=>{
    const{id}=req.params;
    const moviefind=await movies.findById(id);
    res.status(200).json(moviefind);
};

//create movie inmany//
const createmovies=async(req,res)=>{
    const {movie_id,title,description,lanuage,release_date}= req.body;
          const moviedes= await movies.create({
            movie_id,
            title,
            description,
            lanuage,
            release_date,
          });
          res.status(200).json(moviedes);
        }; 
//update many in all //
        // const updatemovies=async(req,res)=>{
        //     const {movie_id,title,description,lanuage,release_date}= req.body;
        //     const movieup=await movies.updateMany({
        //     movie_id,
        //     title,
        //     description,
        //     lanuage,
        //     release_date,
        //     });
        //     res.status(200).json(movieup);
        // };
        


        const updatemovies=async(req,res)=>{
            const {movie_id}= req.body;
       const moviedel= await movies.updateOne(movie_id);
            res.status(200).json(moviedel);  
        };
//delete many in particular all field required//
        const deletemovies=async(req,res)=>{
            const {movie_id}= req.params;
       const moviedel= await movies.deleteOne();
       await movies.findById(movie_id);
            res.status(200).json(moviedel);  
        };


        
// const deletemovies=(req,res)=>{
//     res.send("delete a movie");
// };

module.exports={getallmovies,getmovies,createmovies,updatemovies,deletemovies};