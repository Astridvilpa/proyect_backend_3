const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/appointmentController");
const auth = require("../middlewares/auth");


//User
router.post("/", auth, ctrl.create);
router.get("/:id", auth, ctrl.getById);

//protected routes

router.put("/:id", auth, ctrl.update);
// router.delete("/:id", ctrl.delete);

module.exports = router;
