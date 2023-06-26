const authRouter = require('./auth');
const contactsRouter = require('./contacts');
const helpRouter = require('./help');
const boards = require('./boards');
const columns = require('./columns');
const tasks = require('./tasks');

module.exports = {
    authRouter,
    contactsRouter,
    helpRouter,
    boards,
    columns,
    tasks,
};