const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const updateColumn = async (req, res) => {
    const { boardId, columnId } = req.params;
    const { title } = req.body;
    const result = await Board.findOneAndUpdate({ _id: boardId }, { $set: { [`columns.$[i].${"title"}`]: title } }, { "arrayFilters": [{ "i._id": columnId }] }, { new: true, });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json({ title });
}

module.exports = updateColumn;