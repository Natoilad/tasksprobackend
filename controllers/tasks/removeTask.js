const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const removeTask = async (req, res) => {
    const { taskId } = req.params;
    const result = await Task.findByIdAndRemove(taskId);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    return res.json({ message: "Task delete success" });
}

module.exports = removeTask;