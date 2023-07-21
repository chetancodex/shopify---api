const express = require("express");
const router = express.Router();
const newUser = require("../models/newuser");
const mongoose = require("mongoose");
// const user = require("../models/user");

router.post("/signup", (req, res, next) => {
    console.log(req)
//   user.findOne({ email: req.body.email }).then((user) => {
//     if (user) {
//       res.status(404).json({
//         error: "You already have a registration with this email id",
//       });
//     } else {
        
      const User = new newUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(User)
      User.save().then((result) => {
        console.log(result);
        res.status(203).json({
          message: "New User Created",
          newProfile: {
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            password: result.password,
          },
        });
      });
    // }
  });
// });
module.exports = router
