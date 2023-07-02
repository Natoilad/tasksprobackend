const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { columnId } = req.params;
  if (!isValidObjectId(columnId)) {
    // next(HttpError(400, `${contactId} is not valid id`))
    next(HttpError(400, `${columnId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
