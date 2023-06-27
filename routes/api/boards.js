const express = require("express");

const boardsController = require("../../controllers/boards");
const { authenticate, isValidId, validBody } = require("../../middllware");
const { addBoardSchema } = require("../../models");

const router = express.Router();


router.get("/", authenticate, boardsController.listBoards);

router.get(
    "/:boardId",
    authenticate,
    isValidId,
    boardsController.getBoardById
);

router.post(
    "/",
    authenticate,
    validBody(addBoardSchema),
    boardsController.addBoard
);

router.delete(
    "/:boardId",
    authenticate,
    isValidId,
    boardsController.removeBoard
);

router.put(
    "/:boardId",
    authenticate,
    isValidId,
    validBody(addBoardSchema),
    boardsController.updateBoard
);

module.exports = router;
