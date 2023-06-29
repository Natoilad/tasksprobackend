const { Schema } = require("mongoose");
// const Joi = require("joi");

const backgroundSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
});


module.exports = {
  backgroundSchema,
};