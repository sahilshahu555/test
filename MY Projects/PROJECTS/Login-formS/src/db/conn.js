
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/login" , {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
 } ).then(() => {
     console.log( `connection successful`);
}).catch((e) => { 
     console.log( `no connection successful ${e}`);
});
