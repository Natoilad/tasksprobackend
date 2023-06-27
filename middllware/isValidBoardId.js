const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidBoardId = (req, res, next) => {
    const { boardId } = req.params;
    if (!isValidObjectId(boardId)) {
        next(HttpError(400, `${boardId} is not valid id`))
    }
    next();
}

module.exports = isValidBoardId;