const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const addColumn = async (req, res) => {
    const { boardId } = req.params;
    console.log(req.params)
    const result = await Board.findByIdAndUpdate({ _id: boardId }, { $push: { columns: req.body } }, { new: true, });
    // const result = await Board.findByIdAndUpdate({ _id: boardId }, { $push: { columns: { ...req.body, boardId } } }, { new: true, });

    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(201).json(result);
};

module.exports = addColumn;