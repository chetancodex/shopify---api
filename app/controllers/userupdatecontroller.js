const mongoose = require("mongoose");
const UserDetails = require("../models/users/userupdatemodel");
const jsonwebtoken = require("jsonwebtoken");
const secretKey = "your_secret_key_here";

exports.username = (req, res, next) => {
  const token = req.body.token;
  jsonwebtoken.verify(token, secretKey);
  let data = jsonwebtoken.decode(token, secretKey);
  console.log(data);
  return res.status(200).json(data);
};

exports.updateUserDetails = (req, res, next) => {
  // Find the user based on the provided username
  UserDetails.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        user = new UserDetails();
        user.username = req.body.username;
      }
      // Update the user's details with the provided data
      user.contactNumber = req.body.contactNumber;
      user.city = req.body.city;
      user.street = req.body.street;
      user.houseNumber = req.body.houseNumber;
      user.zipcode = req.body.zipcode;
      // Save the updated user details to the database
      return user.save();
    })
    .then((data) => {
      // Return a success response with the updated user details
      return res.status(200).json({
        message: "Details updated",
        details: {
          contactNumber: data.contactNumber,
          city: data.city,
          street: data.street,
          houseNumber: data.houseNumber,
          zipcode: data.zipcode,
        },
      });
    })
    .catch((error) => {
      // Handle any errors that occurred during the process
      return res
        .status(500)
        .json({ message: "Error updating user details", error });
    });
};

exports.getdetails = async (req, res, next) => {
  try {
    const userusername = await UserDetails.findOne({
      username: req.body.username,
    });
    if (!userusername) {
      return res.status(401).json({
        message: "error occocured in get details",
      });
    }
    const data = {
      contactNumber: userusername.contactNumber,
      city: userusername.city,
      houseNumber: userusername.houseNumber,
      street: userusername.street,
      zipcode: userusername.zipcode,
    };
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
