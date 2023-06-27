const {Board} = require("../../models");


const listBoards = async (req, res) => {
    const result = await Board.find();
    res.json(result);
};

module.exports = listBoards;
