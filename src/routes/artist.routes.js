const express = require("express");
const router = express.Router();
const crtl = require("../controllers/artistController");




router.post("/", crtl.create);
router.get("/", crtl.getAll);
router.get("/:id", crtl.getById);
router.put("/:id", crtl.update);
router.delete("/:id", crtl.delete);


module.exports = router;