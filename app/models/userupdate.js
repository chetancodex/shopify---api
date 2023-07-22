const mongoose = require("mongoose");
const UserUpdateSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  address: {
    city: String,
    street: String,
    number: Number,
    zipcode: Number,
  },
  contactNumber: { type: String, required: true },
});
module.exports = mongoose.model("UserUpdate", UserUpdateSchema);
