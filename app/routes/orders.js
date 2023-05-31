const express = require("express");
const router = express.Router();
// Get Orders
router.get("/", (req, res, next) => {
  res.status(201).json({
    message: "You Get an Orders",
  });
});
// Post Orders
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "You Post A Order",
  });
});
//Patch Orders
router.patch("/", (req, res, next) => {
  res.status(201).json({
    message: "You Patch the New Orders",
  });
});
// Delete Orders
router.delete("/", (req, res, next) => {
  res.status(201).json({
    message: "You Successfully Delete The Orders",
  });
});
// Get Orders Id
router.get("/:id", (req, res, next) => {
  res.status(201).json({
    message: "you Get the Order Id",
  });
});
//Post the Order Id
router.post("/:id", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    message: "you Get the Order Id",
    order: order,
  });
});
//Patch Order Id
router.patch("/:id", (req, res, next) => {
  res.status(201).json({
    message: "you Get the Order Id",
  });
});
//Delete Order ID
router.delete("/:id", (req, res, next) => {
  res.status(201).json({
    message: "you Get the Order Id",
  });
});
module.exports = router;
