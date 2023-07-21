const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const mongoose = require("mongoose");
// Get Cart
router.get("/", (req, res, next) => {
  Cart.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// Post Cart
router.post("/", (req, res, next) => {
  console.log(req);

  if (typeof req.body == undefined) {
    res.status(404).json({
      message: "data is undefined",
    });
  } else {
    const cart = new Cart({
      id: req.body.id,
      userId: req.body.userId,
      date: req.body.date,
      products: req.body.products,
    });
    cart
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Cart has been Created",
          cartInfo: {
            id: result.id,
            products: result.products,
            date: result.date,
            userId: result.userId,
          },
        });
      })
      .catch((err) => {
        res.status(404).json({
          error: err,
        });
      });
  }
});
module.exports = router;
