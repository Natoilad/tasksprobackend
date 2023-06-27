const authRouter = require('./auth');
const contactsRouter = require('./contacts');
const helpRouter = require('./help');
const boardsRouter = require("./boards");
const columns = require('./columns');
const tasks = require('./tasks');

module.exports = {
  authRouter,
  contactsRouter,
  helpRouter,
  boardsRouter,
  columns,
  tasks,
};