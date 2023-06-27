const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const removeBoard = async (req, res) => {
    const { boardId } = req.params;
    const result = await Board.findByIdAndRemove(boardId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    //тут треба прописати видалення тасок

    res.json({
        message: "Delete success"
    })
};

module.exports = removeBoard;