const { ctrlWrapper } = require("../../helpers");
const addColumn = require('./addColumn');
const listColumns = require('./listColumns');
const getColumnById = require('./getColumnById');
const removeColumn = require('./removeColumn');
const updateColumn = require('./updateColumn');


module.exports = {
    addColumn: ctrlWrapper(addColumn),
    listColumns: ctrlWrapper(listColumns),
    getColumnById: ctrlWrapper(getColumnById),
    removeColumn: ctrlWrapper(removeColumn),
    updateColumn: ctrlWrapper(updateColumn),
}
