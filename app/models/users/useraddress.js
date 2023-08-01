const mongoose = require('mongoose')
const AddressSchema = new mongoose.Schema({
    id : String,
    city: String,
    street: String,
    number: Number,
    zipcode: Number,
  });
module.exports = mongoose.model('UserAddress', AddressSchema)