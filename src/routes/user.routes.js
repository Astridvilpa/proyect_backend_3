const express = require("express");
const router = express.Router();
const crtl = require("../controllers/userController");
const auth = require("../middlewares/auth");

// User routes

router.get("/appointments", auth, crtl.getUserAppointments);
router.get('/profile', auth, crtl.getUserProfile);
// router.put('/profile', auth, crtl.updateUserProfile);

//protected routes

router.get("/", crtl.getAll);
router.get("/email", crtl.getUserByEmail);
router.get("/:id", crtl.getById);
router.put("/:id", crtl.update);
router.delete("/:id", crtl.delete);
router.get("/:id/appointments", crtl.getAppointmentsByUserId);

module.exports = router;
