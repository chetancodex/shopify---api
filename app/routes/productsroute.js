const express = require("express");
const router = express.Router();
const Product = require("../models/productsmodel");
const mongoose = require("mongoose");
const ProductController = require("../controllers/productcontroller");

//Get Products
router.get("/", ProductController.getAllProducts);
//Post Products
router.post("/", ProductController.postProduct);

//Get ProductsId
router.get("/:productId", ProductController.getProductId);

//Patch ProductsId
router.patch("/:productsId", ProductController.updateProduct);
// Delete ProductsId
router.delete("/:productsId", ProductController.deleteProducts);

module.exports = router;
