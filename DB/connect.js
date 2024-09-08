const mongoose = require("mongoose");
require("dotenv").config();
// uri = "mongodb+srv://poopyma/x23:6OG79VOxO4WHgSYx@restapi.iexin.mongodb.net/Restapi?retryWrites=true&w=majority&appName=Restapi";

const connectDB = async () =>{
    try{
        const connection =  await mongoose.connect(process.env.uri);
        console.log("Database successfully connected");
    return connection;
    }catch(error){
        console.log(error)
    }

};


module.exports  =  connectDB;