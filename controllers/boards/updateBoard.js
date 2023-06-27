const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const updateBoard = async (req, res) => {
    const { boardId } = req.params;
    console.log(boardId)
    const result = await Board.findByIdAndUpdate(boardId, req.body, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateBoard;