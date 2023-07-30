const {Router} = require("express")

const {BlogModel} = require("../models/blog")
const { UserModel } = require("../models/user")

const blogRouter = Router()


blogRouter.get("/", async (req, res) => {
    const blogs = await BlogModel.find()
    res.send({blogs : blogs})
})

blogRouter.post("/create",async (req, res) => {
    const {title, description} = req.body
    const author_id = req.user_id
    const user = await UserModel.findOne({_id : author_id})
    const new_blog = new BlogModel({
        title,
        description,
        author_name : user.name,
        author_email : user.email
    })
    await new_blog.save()
    res.send("blog created")
})

blogRouter.put("/edit/:blogID", async (req, res) => {
    const blogID = req.params.blogID
    const payload = req.body

    const user_id = req.user_id
    const user= await UserModel.findOne({_id : user_id})
    const user_email = user.email;

    const blog = await BlogModel.findOne({_id : blogID})
    const blog_author_email = blog.author_email

    if(user_email != blog_author_email){
        res.send("you are unauthorised")
    }
    else{
        await BlogModel.findByIdAndUpdate(blogID, payload)
        res.send(`blog ${blogID} updated`)
    }

})

blogRouter.delete("/delete/:blogID", async (req, res) => {
    const blogID = req.params.blogID

    const user_id = req.user_id
    const user= await UserModel.findOne({_id : user_id})
    const user_email = user.email;

    const blog = await BlogModel.findOne({_id : blogID})
    const blog_author_email = blog.author_email
    console.log(user_email)
    console.log(blog_author_email)
    if(user_email != blog_author_email){
        res.send("you are unauthorised")
    }
    else{
        await BlogModel.findByIdAndDelete(blogID)
        res.send(`blog ${blogID} deleted`)
    }
})

module.exports = {blogRouter}