const express = require("express");
const router = express.Router();
const serviceRoutes = require("./service.routes");
const artistRoutes = require("./artist.routes");
const userRoutes = require("./user.routes");

router.use("/services", serviceRoutes);
router.use("/artists", artistRoutes);
router.use("/users", userRoutes);




module.exports = router;
