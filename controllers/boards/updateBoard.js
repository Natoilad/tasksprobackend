const { Board } = require("../../models");
const { HttpError } = require("../../helpers");


const updateBoard = async (req, res) => {
    const { boardId } = req.params;
    const result = await Board.findByIdAndUpdate(boardId, req.body, {
        new: true,
    });
    if (!result) {
        throw HttpError(404, `Board with ${boardId} is not found`);
    }
    res.json(result);
};

module.exports = updateBoard;
