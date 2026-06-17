import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});
import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`connection is failed !!`, err);
})








// import express from "express";
// const app = express()
// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR: ",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is working on port ${process.env.PORT}`)   
//         })
//     } catch (error) {
//         console.log("ERROR: ", error)
//         throw error;
//     }
// })()