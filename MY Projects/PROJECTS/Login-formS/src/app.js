const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
require("./db/conn");
const Register =require("./models/reg");
const hbs = require("hbs");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");
// 
const static_Path = path.join(__dirname,"../public/");
const tem_Path = path.join(__dirname, "../templates/views");
const par_Path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_Path));
app.set("view engine", "hbs");
app.set("views", tem_Path );
hbs.registerPartials(par_Path);
// 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//**************************  Index **************************************************
app.get("/",( req, res) => {
    res.render("index");
});
// ***********************  REGISTER GET  *********************************************
app.get("/register",( req, res) => {
    res.render("register");
});
// create a user in our data base****  +REGISTER GET *****************************************
app.post("/register",async ( req, res) => {
    try {
      const password = req.body.password;
      const confirmpassword = req.body.confirmpassword;

      if(password === confirmpassword){
        
        const newUser = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
            gender: req.body.gender,
           
        });

        // 
        const token = await newUser.generateAuthToken();
        // 

        const registered = await newUser.save();
        res.status(201).render("index");

      }else{
           res.send("password are not matching")
      }

    } catch (error) {
        res.status(400).send(error);
    }
});
// ***********************  LOGIN GET API  **********************************************

app.get("/login",( req, res) => {
    res.render("login");
});
// ***********************  LOGIN POST API **********************************************
app.post("/login", async ( req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const useremail = await Register.findOne({ email:email
    });

// ************************  hashing password  ************************************* (new)
      const isMatch = await bcrypt.compare(password, useremail.password);

// **********************    TOKEN generating    ***************************************

       const token = await useremail.generateAuthToken();
      
// somthing change in below if statement
        if(isMatch){
            res.status(201).render("index")
        }else{
            res.send("Password are not matching");
        }

    } catch (error) {
        res.status(400).send(error);
    }
});
// ***********************************************************************

app.listen( port, () => {
     console.log(`server is running at port no ${port}`);
});



