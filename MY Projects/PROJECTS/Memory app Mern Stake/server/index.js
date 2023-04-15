 import express from 'express';
 import bodyParser from 'body-parser';
 import mongoose from 'mongoose';
 import  Cors from 'cors';
 import router from './routes/router.js'
 const PORT = process.env.PORT || 5000;

//  const express = require('express');
//  const bodyParser = require('body-parser');
//  const mongoose = require ('mongoose');
//  const cors = require('cors');
// 1
 const app = express();

 
 
 
 //**********************************************************************************************
 // 2
 app.use(bodyParser.json({ limit: "30mb", extended: true}));
 app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
 app.use(Cors());
 
 app.use('/posts', router);
//  **************************************************

// *********   MONGO DB  START  ******************
// 3
  mongoose.connect("mongodb://127.0.0.1:27017/memories", {
       useNewUrlParser:true,
       useUnifiedTopology:true

     }).then(() => {app.listen(PORT, ()=> 
      console.log( `Server is Running at ${PORT} `))})
      .catch((e) =>  {console.log( `No connection ${e}`)
     } );
  // mongoose.set('useFindAndModify', false); {  Not required }
//  ********   MONGO DB  END    ******************

