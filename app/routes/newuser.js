const express = require("express");
const router = express.Router();
const newUser = require("../models/newuser");
const mongoose = require("mongoose");
const userController = require("../controllers/users");
// To register User
router.post("/register",userController.register)


module.exports = router
