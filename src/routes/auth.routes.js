const express = require("express");
const router = express.Router();
const crtl = require("../controllers/authController");


router.post('/register', crtl.register);
// router.put('/profile', crtl.login);


module.exports = router;