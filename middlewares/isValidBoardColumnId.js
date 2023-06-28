const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidBoardColumnId = (req, res, next) => {
    const { boardId, columnId } = req.params;
    if (!isValidObjectId(boardId)) {
        next(HttpError(400, `${boardId} is not valid id`))
    }
    if (!isValidObjectId(columnId)) {
        next(HttpError(400, `${columnId} is not valid id`))
    }
    next();
}

module.exports = isValidBoardColumnId;
