const cors = require("cors");
const express=require('express');
const createError=require('http-errors');
const app=express();
app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
  );
const PORT=3030||4040;
app.use(express.json());
const ConnectDB=require('./src/config/db');
ConnectDB();

const routes=require('./src/routes/routes');
app.use('/dashboard',routes);

app.listen(PORT,()=>{
    console.log('welcome to dashboard'+ PORT);

});

app.use((err,req,res,next)=>{
    next(createError.NotFound("this routes does not Exists!"));
});
app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    console.log(err);
    res.json({
        status:err.status || 500,
        error:err.message,
    });
});



// const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) 




// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors()); // Enables CORS for all origins

// app.get('/dashboard/user', (req, res) => {
//     res.json({ message: 'This is CORS-enabled for all origins!' });
// });

// app.listen(3030, () => {
//     console.log('Server running with CORS enabled on port 3030');
// });









