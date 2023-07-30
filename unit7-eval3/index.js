const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const cors = require("cors")

const {connection} = require("./config/db")
const {UserModel} = require("./models/User.model")
const {blogRouter} = require("./routes/blog.routes")
const {authentication} = require("./middlewares/authentication")


const app = express()
app.use(cors({
    origin : "*"
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Base API endpoint")
})


app.post("/signup", async (req, res) => {
    let {name, email, password, age, phone_number} = req.body;
    bcrypt.hash(password, 3, async function(err, hash) {
        const new_user = new UserModel({
            name,
            email,
            password : hash,
            age,
            phone_number
        })
        try{
            await new_user.save()
            res.send({msg : "sign up successfull"})
        }
        catch(err){
            console.log(err)
            res.status(500).send("something went wrong, please try again later")
        }
    });
})

app.post("/login", async (req, res) => {
    const {email, password} = req.body; //elon@123
    const user = await UserModel.findOne({email})
    if(!user){
        res.send("Sign up first")
    }
    else{
        const hashed_password = user.password
        bcrypt.compare(password, hashed_password, function(err, result) {
            if(result){
                let token = jwt.sign({user_id : user._id}, process.env.SECRET_KEY);
                res.send({msg : "login successfull", token : token})
            }
            else{
                res.send("Login failed, invalid credentials")
            }
        });
    }
})


app.use("/blogs", authentication, blogRouter)



app.listen(8000, async () => {
    try{
        await connection
        console.log("connected to DB Successfully")
    }
    catch(err){
        console.log("error while connecting to DB")
        console.log(err)
    }
    
    console.log("listening on port 8000")
})


