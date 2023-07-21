const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    image: { type: String, required: false },
    name : { type: String , required: false},
    description: {type: String, required: false},
    rating : { type: Number, required: false},
    price: { type: Number, required: false},
    brand: {type:String, required:false},
    modelName: {type: String,required: false},
    color: {type: String, required: false}

})
module.exports = mongoose.model('Product',productSchema)