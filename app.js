// Imports
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//Express is a Node Js framework
const app = express();
const productRoutes = require("./app/routes/products");
const orderRoutes = require("./app/routes/orders");

// App Usage
//Morgan used for Logging
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Routes which should handle request
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use((req, res, next) => {
  const error = new Error("The Route is Not Found");
  error.status = 404;
  next(error);
});
//Mongoose Connect
mongoose.connect(
  "mongodb+srv://chetan:" +
    process.env.MONGODB_PW +
    "@node-rest-api.lvrifv6.mongodb.net/?retryWrites=true&w=majority",
  { useMongoClient: true }
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === " OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
    return res.status(200).json({});
  }
});
app.use((error, req, res, next) => {
  res.status(error.status || 505);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//Exports
module.exports = app;
