const express=require("express");
const mongoose=require("mongoose");
const {auth}=require("./middelwares/middelwares")
const {UserModel}=require("./models/UserModel")
const {ProductModel}=require("./models/ProductModel")


const app=express();
app.use(express.json());

// user
// post sign up

app.post("/signup",async(req,res)=>{
    let data= await UserModel.create(req.body);
    res.send(data);
})

// post login
app.post("/login",async(req,res)=>{
    let data= await UserModel.findOne(req.body);
   if(data){ res.send("login successful \n token : sahil123")}
   else{ res.send("login failed!")}
})

// products
// get
app.get("/products",auth, async (req, res)=>{
    const productData =await ProductModel.find();
    res.send(productData);
})
// post
app.post("/products",auth, async (req, res)=>{
    const productData =await ProductModel.create(req.body);
    res.send(productData);
})
// put
app.put("/products/:id",auth, async (req, res)=>{
    const {id}=req.params
    const productDataChanged =await ProductModel.findByIdAndUpdate(id,req.body);
    res.send(productDataChanged);
})
// delete
app.delete("/products/:id",auth, async (req, res)=>{
    const {id}=req.params
    await ProductModel.findByIdAndDelete(id);
    res.send("Product is deleted");
})
// 
app.listen(3001,async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/Practice2")
    .then(()=>{console.log("server running at port 3001")})
})