const auth=(req,res,next)=>{
    const preToken="sahil123";
    const token=req.query.token;

    if(token !== preToken){ return res.send("not Authorized")}
    next();
}
module.exports={auth};