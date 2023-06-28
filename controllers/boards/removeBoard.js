const { Board } = require("../../models");
const { Task } = require("../../models");

const { HttpError } = require("../../helpers");

const removeBoard = async (req, res) => {
    const { boardId } = req.params;
    console.log(boardId)
    const result = await Board.findByIdAndRemove(boardId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    await Task.deleteMany({ boardId: boardId });
    res.status(200).json({
        message: "Board delete successfully"
    })
};

module.exports = removeBoard;