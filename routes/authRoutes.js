const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/authControllers");
const { isAuth } = require("../middlewares/isAuth");

router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);
router.put("/editUserInformation", isAuth, authControllers.editUserInformation);

module.exports = router;
