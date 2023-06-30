const express = require("express");
const ctrl = require("../../controllers/help");

const { helpSchema } = require("../../models");
const { validBody, authenticate } = require("../../middlewares");

const helpRouter = express.Router();

helpRouter.post("/help", authenticate, validBody(helpSchema), ctrl.needHelp);

module.exports = helpRouter;