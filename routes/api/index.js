const authRouter = require('./auth');
const helpRouter = require('./help');
const boardsRouter = require('./boards');
const tasksRouter = require('./tasks');
const listBackgrounds = require("./backgrounds");

module.exports = {
  authRouter,
  helpRouter,
  boardsRouter,
  tasksRouter,
  listBackgrounds,
};