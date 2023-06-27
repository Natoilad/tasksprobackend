const express = require('express')
const { addBoard, listBoards, updateBoard, removeBoard } = require("../../controllers/boards");
const { addColumn, updateColumn, removeColumn } = require("../../controllers/columns");
const { addBoardSchema, addColumnSchema, updateColumnSchema } = require("../../models");
const { validateBody, isValidBoardId, isValidBoardColumnId, authenticate } = require("../../middlewares");

const boardsRouter = express.Router()


boardsRouter.post("/", authenticate, validateBody(addBoardSchema), addBoard);
boardsRouter.get("/", authenticate, listBoards);
boardsRouter.put("/:boardId", authenticate, isValidBoardId, validateBody(addBoardSchema), updateBoard);
boardsRouter.delete("/:boardId", authenticate, isValidBoardId, removeBoard);

boardsRouter.post("/:boardId/columns", authenticate, validateBody(addColumnSchema), addColumn);
boardsRouter.patch("/:boardId/columns/:columnId", authenticate, isValidBoardColumnId, validateBody(updateColumnSchema), updateColumn);
boardsRouter.delete("/:boardId/columns/:columnId", authenticate, isValidBoardColumnId, removeColumn);
module.exports = boardsRouter
