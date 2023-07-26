const mongoose = require("mongoose");
const Product = require("./productsmodel");
const User = require("./newusermodel");

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1, // You can set a default value for the quantity if needed
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [cartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);