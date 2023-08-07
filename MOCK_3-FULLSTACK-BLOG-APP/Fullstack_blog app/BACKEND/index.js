const express =require("express");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const {connection}= require("./DATABASE/db");
const { UserModel } = require("./Models/user");
const { blogRouter } = require("./Routes/route");
const { Auth } = require("./middleware/auth");

const cors=require("cors")
const app=express()

app.use(express.json());
app.use(cors({
    origin : "*"
}))


app.get("/",async(req,res)=>{
    res.send({message:"hello world"});
})
// post Signup
app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password,5,async(err,hash)=>{
       try {
        await UserModel.create({
            name,email,password:hash
        })
         res.status(200).send({msg:"Signup Successful"})
       } catch (error) {
        res.status(400).send({msg:"Something went Wrong"})
       }
    })
})

// post login
app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user= await UserModel.findOne({email});
    
    if(!user){ res.status(400).send({msg:"Sign up First"})}
    else{
        const hashPass=user.password;
        bcrypt.compare(password,hashPass,(err,result)=>{
            if(result){
              let token= jwt.sign({ user_id: user._id},"Sahil")
              res.status(200).send({msg:"Login Successful", token: token});
            }else{
                res.status(400).send({msg:"Login Failed"});
            }
        })
    }

})

app.use("/blogs",Auth,blogRouter)

app.listen(3001,()=>{
    connection
    .then(()=>console.log('connected to DB with port 3001'))
    .catch((err)=>console.log({msg:"Error occurred while connecting to DB "}))
})