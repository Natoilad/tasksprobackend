const { ctrlWrapper } = require("../../helpers");
const addTask = require('./addTask');
const listTasks = require('./listTasks');
const getTaskById = require('./getTaskById');
const removeTask = require('./removeTask');
const updateTask = require('./updateTask');


module.exports = {
    addTask: ctrlWrapper(addTask),
    listTasks: ctrlWrapper(listTasks),
    getTaskById: ctrlWrapper(getTaskById),
    removeTask: ctrlWrapper(removeTask),
    updateTask: ctrlWrapper(updateTask),
}