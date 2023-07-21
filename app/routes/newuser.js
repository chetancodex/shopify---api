const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const newUser = require("../models/newuser")
const UserController = require("../controllers/users");
// To register User
router.post('/',UserController.register);


module.exports = router
