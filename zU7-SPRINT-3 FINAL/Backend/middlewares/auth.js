require("dotenv").config();
const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{
   const token=req.headers.auth?.split(" ")[1];
if(!token){res.send({msg:"please login first"})
}else{
    jwt.verify(token,process.env.SECRET_KEY,
        (err,decoded)=>{
        if(err){ res.send({msg:"Please Login"})
        }else{
          const user_id= decoded.user_id
          req.user_id = user_id; 
          next()
        }
    })
   }
}

module.exports={auth};