const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const removeColumn = async (req, res) => {
    const { boardId, columnId } = req.params;
    const result = await Board.findOneAndUpdate({ _id: boardId }, { $pull: { "columns": { "_id": columnId } } }, { new: true, });
    if (!result) {
        throw HttpError(404, "Not found");
    }

    //тут надо прописать удаление тасок

    res.status(200).json({ result });
}

module.exports = removeColumn;