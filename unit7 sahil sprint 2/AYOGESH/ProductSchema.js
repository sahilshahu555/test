const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Collection');

const ProductSchema = new mongoose.Schema({
    name:{type:String, require:true},
    category:{type:String, require:true},
    price:{type:Number, require:true},
    warranty:{type:String, require:true},
    origin:{type:String, require:true}
})
const ProductModel = mongoose.model('products',ProductSchema);

module.exports = { ProductModel }