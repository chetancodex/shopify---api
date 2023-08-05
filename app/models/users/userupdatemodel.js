const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema({
  username: String,
  contactNumber: Number,
  city: String,
  street: String,
  houseNumber: Number,
  zipcode: Number,
});
module.exports = mongoose.model("Userdetails", userDetailsSchema);
