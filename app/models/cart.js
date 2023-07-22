const mongoose = require("mongoose");
const Product = require("./products");
const User = require("./newuser");
const cartSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  userId: {
    type: Number,
    ref: User,
    required: true,
  },
  date: {
    type: Date,
    required : true
  },
  products : [
    {
        productId: {
            type: Number,
            ref: Product,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    }
  ]
});
module.exports = mongoose.model('Cart',cartSchema)
