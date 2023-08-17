const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect("mongodb+srv://sahilshahu555:harsh123123123@cluster0.ehyj2m8.mongodb.net/Mock3DB");

module.exports={connection}