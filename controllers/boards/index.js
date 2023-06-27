const { ctrlWrapper } = require("../../helpers");
const listBoards = require("./listBoards");
const getBoardById = require("./getBoardById");
const addBoard = require("./addBoard");
const removeBoard = require("./removeBoard");
const updateBoard = require("./updateBoard");


module.exports = {
    listBoards: ctrlWrapper(listBoards),
    getBoardById: ctrlWrapper(getBoardById),
    addBoard: ctrlWrapper(addBoard),
    removeBoard: ctrlWrapper(removeBoard),
    updateBoard: ctrlWrapper(updateBoard),
};
