const mongoose=require("mongoose");
const UserSchema= mongoose.Schema({
    name: String,
    age: Number,
    email:String
})

const UserModel= mongoose.model("Users",UserSchema);

module.exports={UserModel}