const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserController = require("../controllers/userscontrolller");
const ProfileDetailsController = require("../controllers/profiledetailscontroller");
// const newUser = require("../models/newuser");
// To register User
router.post('/register',UserController.register);
//To Get User
router.post('/signin',UserController.sign_in);
//get profile details
router.post('/myprofile',ProfileDetailsController.profileDetails)
module.exports = router
