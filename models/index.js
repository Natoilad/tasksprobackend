// const { Contact, addSchema, updateFavoriteSchema } = require("./contact");
// const { User, registerSchema, loginSchema, emailSchema, themeSchema, profileSchema } = require("./user");
const { User, schema } = require("./user");
const { helpSchema } = require("./help");
const { Board,
    // boardSchema,
    addBoardSchema } = require("./boards");
const { columnSchema, addColumnSchema } = require("./columns");
const { Task, addTaskSchema, updateSchema, updateColumnSchema } = require("./tasks");

module.exports = {
    // Contact,
    // addSchema,
    // updateFavoriteSchema,
    User,
    // registerSchema,
    // loginSchema,
    // emailSchema,
    // themeSchema,
    // profileSchema,
    schema,
    helpSchema,
    Board,
    // boardSchema,
    addBoardSchema,
    columnSchema,
    addColumnSchema,
    Task,
    addTaskSchema,
    updateSchema,
    updateColumnSchema
};