const express = require('express')
const { addBoard, listBoards, updateBoard, removeBoard } = require("../../controllers/boards");
const { addColumn, updateColumn, removeColumn } = require("../../controllers/columns");
const { addBoardSchema, addColumnSchema  } = require("../../models");
const { validBody ,  authenticate } = require("../../middllware/index");
const boardsRouter = express.Router()

boardsRouter.post("/", authenticate, validBody (addBoardSchema), addBoard);
boardsRouter.post("/", authenticate, validBody(addBoardSchema), addBoard);
boardsRouter.get("/", authenticate, listBoards);
boardsRouter.put("/:boardId", authenticate, /*isValidId,*/ validBody(addBoardSchema), updateBoard);
boardsRouter.delete("/:boardId", authenticate, /*isValidId, */ removeBoard);

boardsRouter.post("/:boardId/columns", authenticate, validBody(addColumnSchema), addColumn);
boardsRouter.patch("/:boardId/columns/:columnId", authenticate, /*isValidId,*/ validBody(addColumnSchema), updateColumn);
boardsRouter.delete("/:boardId/columns/:columnId", authenticate, /*isValidId,*/ removeColumn);
module.exports = boardsRouter