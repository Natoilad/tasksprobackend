const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/backgrounds");

router.get("/", ctrl.listBackgrounds);

module.exports = router;
