const { Board } = require("../../models/");
const { HttpError } = require("../../helpers");

const addBoard = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Board.create({ ...req.body, owner });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(201).json(result);
}

module.exports = addBoard;