const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const backgroundSchema = new Schema({
  desktop: {
    type: String,
    required: true,
  },
  tablet: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  bgIcons: {
    type: String,
    required: true,
  },
});

backgroundSchema.post("save", handleMongooseError);
const Background = model("background", backgroundSchema);

module.exports = {
  Background,
};
