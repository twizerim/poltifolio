import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import routes from "./routes"

dotenv.config()
const gedeon=express()
gedeon.use(bodyParser.json())
gedeon.get("/boy",routes)

const port=process.env.PORT
const db=process.env.DATABASE

// config our server

gedeon.listen(port,()=>{
    console.log(`port runing on ${port}`)
})

// config our database

mongoose.connect(db).then(()=>{
    console.log("database successfuly connected")
})
.catch((err)=>{
    console.log(`it is error on ${err}`)
})

export default gedeon