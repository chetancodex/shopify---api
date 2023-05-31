const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : String,
    description: String,
    rating : Number,
    price:Number
})
module.exports = mongoose.model('Products',productSchema)