// Imports
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
//Express is a Node Js framework
const app = express();
app.use(cors());

const productRoutes = require("./app/routes/products");
const newUserRoutes = require('./app/routes/newuser');
const cartRoutes = require('./app/routes/cart');
const UserRoutes = require('./app/routes/user')


// App Usage
//Morgan used for Logging
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes which should handle request
app.use("/products", productRoutes);
app.use("/signup", newUserRoutes);
app.use("/cart",cartRoutes);
app.use('/user',UserRoutes)

// app.use((req, res, next) => {
//   const error = new Error("The Route is Not Found");
//   error.status = 404;
//   next(error);
// });
//Mongoose Connect
mongoose.connect(process.env.URI
  ,
  {useNewUrlParser: true , useUnifiedTopology : true }
).then(() => {
  console.log("DB CONNECTED")
}).catch(err =>{
  console.log(err)
});
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//   res.header("Access-Control-Allow-Headers", "http://localhost:4200");
//   if (req.method === " OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
//     return res.status(200).json({});
//   }
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 505);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

//Exports
module.exports = app;
