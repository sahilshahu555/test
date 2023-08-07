const jwt= require("jsonwebtoken")

const Auth=(req,res,next)=>{
    let token=req.headers.auth?.split(" ")[1];
    if(!token){ res.send({msg:" Please Login First"})}
    else{
   jwt.verify(token,"Sahil",(err,decoded)=>{
      if(err){res.send({msg:" Please Login First"})}
      else{
        req.user_id=decoded.user_id;
        next()
      }
   })
    }
}

module.exports={Auth}