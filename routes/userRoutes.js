const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { isAuth } = require("../middlewares/isAuth");

router.get("/getUserInformation", isAuth, userController.getUserInformation);
module.exports = router;
