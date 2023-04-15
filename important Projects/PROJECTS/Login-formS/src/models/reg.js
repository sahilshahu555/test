const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const newSchema = new mongoose.Schema({
     firstname: {
          type:String,
          required:true
     },
     lastname: {
          type:String,
          required:true
     },
     email: {
          type:String,
          required:true,
          unique:true
     },
     phone : {
          type:Number,
          required:true,
          unique:true
     },
     password : {
          type:String,
          required:true
     },
     confirmpassword : {
          type:String,
          required:true
     },
     gender : {
          type:String,
          required:true
     },
     tokens : [{
          token : {
               type:String,
               required:true
          }
     }]
});

// creating web token //*****************************

newSchema.methods.generateAuthToken = async function() {
     try {
          const token = jwt.sign({_id:this._id.toString()}, 
          "mynameissahilshahuiamgoodpersoniliveinnagpur");
          this.tokens =  this.tokens.concat({token:token});
          await this.save();
          return token;
     } catch (error) {
          res.send(error)
     }
}

// Creating Hash for securing password by using bcryptjs amd middleware in between Schema and save method

newSchema.pre("save", async function(next){

     if(this.isModified("password")) {
// hashing method//
    
     this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.password, 10);;

   }
     next();
});
// *******************************************************

const Register = new mongoose.model("Register", newSchema);

module.exports= Register;