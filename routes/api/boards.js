const express = require('express')
const { addBoard, listBoards, getBoardById, updateBoard, removeBoard } = require("../../controllers/boards");
const { addColumn, updateColumn, removeColumn } = require("../../controllers/columns");
const { addBoardSchema, addColumnSchema } = require("../../models");
const { validBody, authenticate } = require("../../middlewares/index");
const { isValidBoardId, isValidBoardColumnId } = require("../../middlewares");

const boardsRouter = express.Router()

boardsRouter.post("/", authenticate, validBody(addBoardSchema), addBoard);
boardsRouter.get("/", authenticate, listBoards);
boardsRouter.get('/:boardId', authenticate, getBoardById);
boardsRouter.put("/:boardId", authenticate, isValidBoardId, validBody(addBoardSchema), updateBoard);
boardsRouter.delete("/:boardId", authenticate, isValidBoardId, removeBoard);

boardsRouter.post("/:boardId/columns", authenticate, validBody(addColumnSchema), addColumn);
boardsRouter.patch("/:boardId/columns/:columnId", authenticate, isValidBoardColumnId, validBody(addColumnSchema), updateColumn);
boardsRouter.delete("/:boardId/columns/:columnId", authenticate, isValidBoardColumnId, removeColumn);

module.exports = boardsRouter