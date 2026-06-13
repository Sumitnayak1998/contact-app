const express = require('express')
const app = express()
require("dotenv").config()
const { connectDb } = require("./config/db")
const { router } = require('./model/router/cntRoutes')
const cors = require('cors')

connectDb();
app.use(cors(
    {
        origin: process.env.FRONTEND_URL
    }
));
app.use(express.json())
app.use("/api",router)

app.get("/",(req, res)=>{
    res.send("CONTACT APPLICATION")
})
app.listen(process.env.port, err=>{
    if (err) throw err
    console.log(`server running on port : ${process.env.port}`);
    
})