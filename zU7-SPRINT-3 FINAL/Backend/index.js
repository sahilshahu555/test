const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");
require("dotenv").config();

const {connection}=require("./database/db");
const {UserModel}=require("./models/user.model");
const {BlogModel}=require("./models/blog.model");
const {auth}=require("./middlewares/auth");
const {blogRouter}=require("./routes/routes")


const app=express();

app.use(cors( { origin : "*" } ))
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"hello"})
})

app.post("/signup",async(req,res)=>{
    let{ name,email,password,age,phone_number }=req.body;
    bcrypt.hash(password,5,async(err,hash)=>{
        try {
            await UserModel.create({
                name,
                email,
                password:hash,
                age,
                phone_number
            })
            res.status(200).send({mess:"Sign up successful"})
        } catch (error) {
            res.status(400).send({mess:"Something went wrong"})
        }
    })
})

app.post("/login",async(req,res)=>{
    let{ email,password }=req.body;
    const user=await UserModel.findOne({email})
    if(!user){
        res.send("Sign up first")
    }else{
        const hashPassword=user.password
        bcrypt.compare(password, hashPassword,(err, result)=> {
            if(result){
                let token=jwt.sign({ user_id: user._id }, process.env.SECRET_KEY);
                res.send({msg:"Login successful",token : token })
            }else{
                res.send({msg:"Login Failed ,invalid credentials"})
            }
        })
    }
})

app.use("/blogs", auth, blogRouter)


app.listen(3000,()=>{
     connection.then(()=>{console.log("connected to db")}).catch((err)=>{console.log(err)})
})