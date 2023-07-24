const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Collection');

const UserSchema = new mongoose.Schema({
    name:{type:String, require:true},
    age:{type:Number, require:true},
    email:{type:String, require:true},
    city:{type:String, require:true},
    phone_no:{type:Number, require:true},
    password:{type:String, require:true}
})
const UserModel = mongoose.model('Users',UserSchema);

module.exports = { UserModel }