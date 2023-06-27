const { ctrlWrapper } = require("../../helpers");
const addColumn = require('./addColumn');
const removeColumn = require('./removeColumn');
const updateColumn = require('./updateColumn');


module.exports = {
    addColumn: ctrlWrapper(addColumn),
    removeColumn: ctrlWrapper(removeColumn),
    updateColumn: ctrlWrapper(updateColumn),
}
