const express = require('express')
const { addTask, listTasks, getTaskById, removeTask, updateTask } = require("../../controllers/tasks");
const { addTaskSchema, updateSchema } = require("../../models");
const { isValidTaskId, authenticate } = require("../../middlewares");
const { validBody } = require("../../middlewares/index");

const tasksRouter = express.Router();

tasksRouter.get("/", authenticate, listTasks);
tasksRouter.post("/", authenticate, validBody(addTaskSchema), addTask);
tasksRouter.get("/:taskId", authenticate, isValidTaskId, getTaskById);
tasksRouter.put("/:taskId", authenticate, isValidTaskId, validBody(updateSchema), updateTask);
tasksRouter.delete("/:taskId", authenticate, isValidTaskId, removeTask);


module.exports = tasksRouter
