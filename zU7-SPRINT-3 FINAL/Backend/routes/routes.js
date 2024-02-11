const {Router} = require("express");

const {BlogModel} = require("../models/blog.model")
const { UserModel } = require("../models/user.model")

const blogRouter = Router()
// GET METHOD
blogRouter.get("/", async (req, res) => {
    const blogs = await BlogModel.find({user_id:req.user_id})
    res.send({blogs : blogs,mess:"success"})
})
// POST METHOD
blogRouter.post("/create",async(req,res)=>{
    try {
        const {title,description}=req.body;
        const id=req.user_id
        const user=await UserModel.findOne({_id:id})
        await BlogModel.create({
            title,
            description,
            user_id: user._id,
            user_name:user.name
        })
        res.send({msg:"blog created"})
    } catch (error) {
        console.log(error)
    }
})

// Put Method
blogRouter.put("/edit/:blogId",async(req,res)=>{
    const blogId=req.params.blogId;
    const payload=req.body;
    const id=req.user_id;
    
    const blog = await BlogModel.findOne({_id : blogId})
    if(id != blog.user_id){ res.send({mes:"You are Unauthorized"})
   }else{
        await BlogModel.findByIdAndUpdate(blogId,payload)
        return  res.status(201).json({"message":"Updated successfully!"});
    }
})

// delete method
blogRouter.delete("/delete/:blogId",async(req,res)=>{
    const blogId=req.params.blogId;
    const id=req.user_id;

    const blog = await BlogModel.findOne({_id : blogId})

    if(id != blog.user_id){ res.send({mes:"You are Unauthorized to delete blog"})
   }else{
        await BlogModel.findByIdAndDelete(blogId)
        return  res.status(201).json({"message":"Deleted successfully!"});
    }
})

module.exports = {blogRouter}