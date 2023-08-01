// Imports
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");

//Mongoose Connect
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

//Express is a Node Js framework
const app = express();
app.use(cors());

const productRoutes = require("./app/routes/productsroute");
const newUserRoutes = require("./app/routes/newuserroute");
const cartRoutes = require("./app/routes/cartroute");
const userUpdateRoutes = require("./app/routes/userupdateroute")

// App Usage
//Morgan used for Logging
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes which should handle request
app.use("/newuser", newUserRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/userUpdate", userUpdateRoutes);

// JWT token verifier function
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      function (err, decode) {
        if (err) {
          req.user = undefined;
        } else {
          req.user = decode;
        }
      }
    );
  } else {
    req.user = undefined;
  }
});



//Exports
module.exports = app;
