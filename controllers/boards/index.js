const { ctrlWrapper } = require("../../helpers");
const addBoard = require('./addBoard');
const listBoards = require('./listBoards');
const getBoardById = require('./getBoardById');
const removeBoard = require('./removeBoard');
const updateBoard = require('./updateBoard');


module.exports = {
    addBoard: ctrlWrapper(addBoard),
    listBoards: ctrlWrapper(listBoards),
    getBoardById: ctrlWrapper(getBoardById),
    removeBoard: ctrlWrapper(removeBoard),
    updateBoard: ctrlWrapper(updateBoard),
}
