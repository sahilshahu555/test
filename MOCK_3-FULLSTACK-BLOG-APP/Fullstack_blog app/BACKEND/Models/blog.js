const mongoose=require("mongoose");

const blogSchema= new mongoose.Schema({
    title:{ type:String, required:true},
    desc:{ type:String, required:true},
    author:{ type:String},
    user_id:{ type:String}
})

const BlogModel=mongoose.model("Blogs",blogSchema);

module.exports={BlogModel}