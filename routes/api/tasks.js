const express = require('express')
const { addTask, listTasks, getTaskById, removeTask, updateTask } = require("../../controllers/tasks");
const { addTaskSchema, updateSchema } = require("../../models");
const { validateBody, isValidTaskId, authenticate } = require("../../middlewares");

const tasksRouter = express.Router();

tasksRouter.get("/", authenticate, listTasks);
tasksRouter.post("/", authenticate, validateBody(addTaskSchema), addTask);
tasksRouter.get("/:taskId", authenticate, isValidTaskId, getTaskById);
tasksRouter.put("/:taskId", authenticate, isValidTaskId, validateBody(updateSchema), updateTask);
tasksRouter.delete("/:taskId", authenticate, isValidTaskId, removeTask);


module.exports = tasksRouter
