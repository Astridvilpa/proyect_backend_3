const express = require("express");
const router = express.Router();
const crtl = require("../controllers/userController");


// User routes

// router.get('/appointments', ctrol.getUserAppointments);
// router.post('/appointments', ctrol.addAppointmentToUser);
// router.delete('/appointments/:appointmentId', ctrol.removeAppointmentFromUser);


//protected routes

router.get("/", crtl.getAll);
router.get("/:id", crtl.getById);
router.put("/:id", crtl.update);
// router.delete("/:id", crtl.delete);
// router.get('/:id/appointments', ctrol.getAppointmentsByUserId);


module.exports = router;