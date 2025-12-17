import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js'

const app = express()

app.use(express.json())

app.get("/" , (req , res)=>{
    res.send("Hello World")
})

connectDB()

app.listen(process.env.PORT , ()=>{
    console.log("Express is running.");
})