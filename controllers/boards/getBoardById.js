const { Board } = require("../../models/");
const { HttpError } = require("../../helpers");

const getBoardById = async (req, res) => {
    const { boardId } = req.params;
    const result = await Board.findById(boardId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = getBoardById;