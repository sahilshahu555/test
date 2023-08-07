const {Router} =require("express");
const { BlogModel } = require("../Models/blog");
const { UserModel } = require("../Models/user");


const blogRouter=Router();

// GET METHOD
blogRouter.get("/", async (req, res) => {
    const blogs = await BlogModel.find()
    res.send({blogs : blogs})
})

// Post blog

blogRouter.post("/create",async(req,res)=>{
    try {
        const {title,desc}=req.body;
        const id=req.user_id;
        const user= await UserModel.findOne({_id:id})
        await BlogModel.create({
            title,desc,author: user.name,user_id:user._id
        })
        res.status(200).send({msg:"Blog Created"})
    } catch (error) {
        res.status(500).send({msg:"Something went Wrong"})
    }
})

// blog put

blogRouter.put("/edit/:blogID",async(req,res)=>{
 const blogID=req.params.blogID;
 const payload=req.body;
 const id=req.user_id;

 const blog=await BlogModel.findOne({_id:blogID})

 if(id!== blog.user_id){ res.status(400).send({msg:"You are Not Authorized"})}
 else{
    await BlogModel.findByIdAndUpdate(blogID,payload)
    res.status(201).send({msg:"Blog Edited Successfully"})
 }

})

// blog Delete

blogRouter.delete("/delete/:blogID",async(req,res)=>{
    const blogID=req.params.blogID;
    const id=req.user_id;
    const blog=await BlogModel.findOne({_id:blogID})
   
    if(id!= blog.user_id){ res.status(400).send({msg:"You are Not Authorized"})}
    else{
       await BlogModel.findByIdAndDelete(blogID)
       res.status(201).send({msg:"Blog Deleted Successfully"})
    }
   
   })
   

module.exports={blogRouter}