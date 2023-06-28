const { Schema } = require("mongoose");
const Joi = require("joi");

const columnSchema = new Schema({
    title: {
        type: String,
        required: [true, "Set Title for Column"],
    },
});

const addColumnSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
});


module.exports = {
    columnSchema,
    addColumnSchema,
};
