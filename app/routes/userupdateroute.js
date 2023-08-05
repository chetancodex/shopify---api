const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserupdateController = require("../controllers/userupdatecontroller");

// Post user
router.post("/username", UserupdateController.username);
router.post("/userupdate", UserupdateController.updateUserDetails);
router.post("/profile", UserupdateController.getdetails);
module.exports = router;
