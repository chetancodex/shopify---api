const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const mongoose = require("mongoose");
//Get Products
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request to /products",
  });
});
//Post Products
router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
  });
  product.save().then(result=>{
    console.log(result)
  }).catch(error=> {
    console.log(error)
  });
  res.status(200).json({
    message: "Handling POST request to /products",
    createProduct: product,
  });
});
//Get ProductsId
// router.get("/:productsId", (req, res, next) => {
//   const id = req.params.productsId;
//   if (id === "special") {
//     res.status(200).json({
//       message: "You have entered in a special route",
//       id: id,
//     });
//   } else {
//     res.status(200).json({
//       message: "You have passed an ID",
//     });
//   }
// });
//Patch ProductsId
// router.patch("/:productsId", (req, res, next) => {
//   res.status(200).json({
//     message: "Update ProductsId",
//   });
// });
// Delete ProductsId
// router.delete("/:productsId", (req, res, next) => {
//   res.status(200).json({
//     message: "Deleted ProductsId",
//   });
// });

module.exports = router;
