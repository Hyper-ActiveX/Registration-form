import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {} from 'dotenv/config'
// require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// schemas
const userKaSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


// mpdels
const userKaModel = new mongoose.models("userKaModel",userKaSchema)


//Routes
app.get("/login",(req,res)=>{
    res.send("login karo")
})

app.get("/register",(req,res)=>{
    res.send("register karo")
})


app.listen(5001, () => {
    console.log('App listenign on port 5001!');
});