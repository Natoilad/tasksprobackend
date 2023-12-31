const express = require("express");
const {
  addTask,
  listTasks,
  getTaskById,
  removeTask,
  updateTask,
  getTaskByColumnId,
  transferTasks,
} = require("../../controllers/tasks");
const { addTaskSchema, updateSchema } = require("../../models");
const {
  isValidTaskId,
  authenticate,
  isValidTaskColumnId,
} = require("../../middlewares");
const { validBody } = require("../../middlewares/index");
const { transferTaskSchema } = require("../../models/tasks");

const tasksRouter = express.Router();

tasksRouter.get("/", authenticate, listTasks);
tasksRouter.post("/", authenticate, validBody(addTaskSchema), addTask);
tasksRouter.get("/:taskId", authenticate, isValidTaskId, getTaskById);
tasksRouter.get(
  "/column/:columnId",
  authenticate,
  isValidTaskColumnId,
  getTaskByColumnId
);
tasksRouter.put(
  "/:taskId",
  authenticate,
  isValidTaskId,
  validBody(updateSchema),
  updateTask
);
tasksRouter.patch(
  "/:taskId",
  authenticate,
  isValidTaskId,
  validBody(transferTaskSchema),
  transferTasks
);
tasksRouter.delete("/:taskId", authenticate, isValidTaskId, removeTask);

module.exports = tasksRouter;
