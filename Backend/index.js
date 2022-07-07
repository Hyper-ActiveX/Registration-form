import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { } from 'dotenv/config'
// require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// schemas
const userKaSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


// mpdels User 
const userKaModel = new mongoose.model("users", userKaSchema)


//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    userKaModel.findOne({email:email}, (err,user)=>{
        if(user){
            if(password===user.password){
                res.send({ message: "Login successfully",user:user})
            }else{
                res.send({message: "wrong password"})
            }
        }else{
            res.send({ message: "user not found" })
        }
    })

})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    // checking user is already exist or not
    userKaModel.findOne({ email: email }, (err, user) => {
        if (user) {
            res.statu(502).send({ message: "user already registered" })
        } else {
            //creating a new user in mongo db with the help of above data
            const user = new userKaModel({
                name,
                email,
                password
            })

            //saving data in mogodb
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "successfully registered" })
                }
            })
        }
    })
})


app.listen(5001, () => {
    console.log('App listenign on port 5001!');
});