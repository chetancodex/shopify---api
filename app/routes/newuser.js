const express = require("express");
const router = express.Router();
const newUser = require("../models/newuser");
const mongoose = require("mongoose");
const UserController = require("../controllers/users");
// To register User
router.post('/:register',UserController.register);


module.exports = router
