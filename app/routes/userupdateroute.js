const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserupdateController = require('../controllers/userupdatecontroller')
// const user = require("../models/user");
// Get User
router.get("/", (req, res, next) => {
  const id = req.params.id;
  User.findOne({
    id,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
});
// Post user
router.post("/userdetails", UserupdateController.userdetails);
router.post('/username',UserupdateController.username);
router.post('/profile',UserupdateController.getdetails)
module.exports = router;
