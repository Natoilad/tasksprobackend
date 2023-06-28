const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const listTasks = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Task.find({ userId: owner }, "-createdAt -updatedAt");
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
}

module.exports = listTasks;