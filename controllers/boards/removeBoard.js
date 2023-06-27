const { Board } = require("../../models");
const { HttpError } = require("../../helpers");


const removeBoard = async (req, res) => {
    const { boardId } = req.params;
    const result = await Board.findByIdAndRemove(boardId);
    if (!result) {
        throw HttpError(404, `Board with ${boardId} is not found`);
    }
    res.json({ message: "Board deleted" });
};

module.exports = removeBoard;
