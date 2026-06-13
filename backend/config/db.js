const mongoose = require("mongoose")

exports.connectDb = async()=>{
    await mongoose.connect(process.env.mongoDb_url)
    console.log("Database Connected");
    
}