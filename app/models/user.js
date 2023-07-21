const mongoose = require("mongoose");
const UserDetailsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: {
    city: String,
    street: String,
    number: Number,
    zipcode: Number,
  },
  contactNumber: { type: String, required: true },
});
module.exports = mongoose.model("UserDetails", UserDetailsSchema);
