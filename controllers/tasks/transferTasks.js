const { Task } = require("../../models");
const { HttpError } = require("../../helpers");

const transferTasks = async (req, res) => {
  const { taskId } = req.params;
  console.log(taskId);
  const result = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.json(result);
};

module.exports = transferTasks;
