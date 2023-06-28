const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const getTaskById = async (req, res) => {
    const { taskId } = req.params;
    const result = await Task.findById(taskId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    return res.json(result);
}

module.exports = getTaskById;