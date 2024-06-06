const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/appointmentController");

//public
router.post("/", ctrl.create);



//protected routes

router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete);

module.exports = router;
