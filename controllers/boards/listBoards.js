const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const listBoards = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Board.find({ owner });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);

};

module.exports = listBoards;