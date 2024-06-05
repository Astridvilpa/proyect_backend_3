const express = require("express");
const router = express.Router();
const serviceRoutes = require("./service.routes");

router.use("/services", serviceRoutes);

module.exports = router;
