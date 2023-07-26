const express = require("express");
const router = express.Router();
const Cart = require("../models/cartmodel");
const mongoose = require("mongoose");
const cartController = require('../controllers/cartcontroller')
// Get Cart
router.get("/",cartController.getCart);
// Post Cart
router.post("/create",cartController.postCart );
module.exports = router;
