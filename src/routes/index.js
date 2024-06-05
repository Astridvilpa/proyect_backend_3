const express = require("express");
const router = express.Router();
const serviceRoutes = require("./service.routes");
const artistRoutes = require("./artist.routes");

router.use("/services", serviceRoutes);
router.use("/artists", artistRoutes);




module.exports = router;
