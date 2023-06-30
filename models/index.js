const { User, emailSchema, themeSchema, profileSchema } = require("./user");
const { helpSchema } = require("./help");
const { Board, boardSchema, addBoardSchema } = require("./boards");
const { columnSchema, addColumnSchema } = require("./columns");
const { Task, addTaskSchema, updateSchema, updateColumnSchema } = require("./tasks");
const { backgroundSchema } = require("./background");

module.exports = {
  User,
  emailSchema,
  themeSchema,
  profileSchema,
  helpSchema,
  Board,
  boardSchema,
  addBoardSchema,
  columnSchema,
  addColumnSchema,
  Task,
  addTaskSchema,
  updateSchema,
  backgroundSchema,
};