import mongoose from "mongoose";

const postschema = mongoose.Schema({    
     title: String,
     message: String,
     creator:{
          type: String,
          required:true,
     },
     tags:[String],
     selectedFile: String,
     likeCount: {
          type: Number,
          
          default: 0
     },
     createdAt:{
          type: Date,
          default:new Date()
     },
});


const Postmessage = mongoose.model('Postmessage', postschema );

export default Postmessage;