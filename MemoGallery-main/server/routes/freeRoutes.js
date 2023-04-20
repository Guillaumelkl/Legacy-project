const express = require("express");
const router = express.Router();

const registerUser = require("../controllers/registerControllers");
const loginUser = require("../controllers/loginControllers");


router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;
