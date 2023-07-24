var moment = require("moment");
var fs = require("fs");

const loggerMiddleware = (req, res, next) => {
  let currTime = moment().format("HH:mm:ss");
  let reqTime = new Date().getMilliseconds();

  next();
  
  let resTime = new Date().getMilliseconds();

  let logs = `${req.method}\n${req.url}\n${currTime}\n${resTime-reqTime} milliseconds\n\n\n`

  fs.appendFile('logs.txt', logs, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("logs created in logs.txt file");
    }
  })

};

const authMiddleware = (req, res, next) => {
  const predefinedSecretToken = "secret1234";
  const secrettoken = req.query.secrettoken;

  if (secrettoken !== predefinedSecretToken) {
    return res.send("Not Authorized!");
  }

  next();
};

module.exports = { authMiddleware, loggerMiddleware };
