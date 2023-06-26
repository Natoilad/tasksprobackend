const { Schema } = require("mongoose");
const Joi = require("joi");

const columnSchema = new Schema({
    title: {
        type: String,
        required: [true, "Set Title for Column"],
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref: "board",
        required: true,
    },
});

const addColumnSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
});
// const Column = model("column", contactSchema);


module.exports = {
    // Column,
    columnSchema,
    addColumnSchema,
};
