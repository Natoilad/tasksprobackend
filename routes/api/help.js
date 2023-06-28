const express = require("express");
const ctrl = require("../../controllers/help");
const needHelp = require("../../controllers/help/needHelp");

const { helpSchema } = require("../../models");
const { validBody, authenticate } = require("../../middlewares");

const helpRouter = express.Router();

helpRouter.post("/help", authenticate, validBody(helpSchema), ctrl.needHelp);
// helpRouter.post("/help", needHelp);

module.exports = helpRouter;