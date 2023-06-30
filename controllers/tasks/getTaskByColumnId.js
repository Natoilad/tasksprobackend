const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const getTaskByColumnId = async (req, res) => {
    const { columnId } = req.params;
    const result = await Task.find({ columnId }, "-createdAt -updatedAt");
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
}

module.exports = getTaskByColumnId