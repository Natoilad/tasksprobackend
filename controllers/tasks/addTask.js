const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const addTask = async (req, res) => {
    const result = await Task.create({ ...req.body });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(201).json(result);
}

module.exports = addTask;