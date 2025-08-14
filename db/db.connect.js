const mongoose=require("mongoose");
require("dotenv").config();

const  mongoUrl=process.env.MONGODB

const initilizationDatabase = async()=>{
   await mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("Connected the Database")
    })
    .catch((error)=>console.log("Error connect to database",error))
}

module.exports={initilizationDatabase}