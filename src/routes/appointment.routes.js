const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/appointmentController");
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");

//public
router.post("/", auth, ctrl.create);



//protected routes

router.put("/:id", ctrl.update);
// router.delete("/:id", ctrl.delete);

module.exports = router;
