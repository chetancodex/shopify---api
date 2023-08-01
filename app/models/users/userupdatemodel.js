const mongoose = require("mongoose");
const UserUpdateSchema = new mongoose.Schema({
  username: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

module.exports = mongoose.model("UserUpdate", UserUpdateSchema);
