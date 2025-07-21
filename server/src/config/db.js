const { default: mongoose } = require("mongoose");

//database connection
const CONNECT_STR =
  "mongodb+srv://mahalakshmi:mahalakshmi123@cluster0.rrwi0.mongodb.net/movie_ticket?retryWrites=true&w=majority&appName=Cluster0";

//CONNECT FUNCTION
const ConnectDB = () => {
  mongoose
    .connect(CONNECT_STR)
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log(error);
      console.log("error connecting to mongodb:", error.message);
    });
};
module.exports = ConnectDB;
