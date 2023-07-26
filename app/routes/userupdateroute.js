const express = require("express");
const router = express.Router();
const User = require("../models/userupdatemodel");
const mongoose = require("mongoose");
// const user = require("../models/user");
// Get User
router.get("/", (req, res, next) => {
  const id = req.params.id;
  User.findOne({
    id,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
});
// Post user
router.post("/", (req, res, next) => {
  let userCount = 0;

  const user = new User({
    id: userCount + 1,
    username: req.body.username,
    password: req.body.password,
    address: {
      city: req.body.address.city,
      street: req.body.address.street,
      number: req.body.address.number,
      zipcode: req.body.address.zipcode,
    },
    contactNumber: req.body.contactNumber,
  });

  user
    .save()
    .then((user) => {
      res.status(200).json({
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstName : user.name.firstName,
          lastName: user.name.lastName
        },
        address: {
          city: user.address.city,
          street: user.address.street,
          number: user.address.number,
          zipcode: user.address.zipcode,
        },
        contactnumber: user.contactnumber,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
