const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./../models/users/newusermodel");
const secretKey = "your_secret_key_here";
// To Register routes
exports.register = (req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    username : req.body.username,
    hash_password: bcrypt.hashSync(req.body.password, 10),
  });
  newUser.save().then((user) => {
    return res.status(200).json({
      message: "USER CREATED",
      UserDetails: {
        email: user.email,
      },
    });
  });
};
// To Sign in Routes
exports.sign_in = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !user.comparePassword(req.body.password)) {
      return res
        .status(401)
        .json({ message: "YOU ENTERED AN INVALID EMAIL OR PASSWORD" });
    }
   
    const token = jwt.sign(
      {
        email: user.email,
        username : user.username,
        id: user._id,
      }, 
      secretKey // Provide the secret key here
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
};
