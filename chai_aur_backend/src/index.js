import dotenv from "dotenv"
dotenv.config({
     path: './.env'
})

console.log("ENV VARIABLES CHECK:", {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    PORT: process.env.PORT
});

import connectDB from "./db/index.js";
import {app} from "./app.js"
import "./utils/cloudinary.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILD !!!",err);
    
})


// import express from "express"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// const app=express();

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })

//     }catch(error){
//         console.log("ERROR",error);
//         throw error
        
//     }
// })()
    
