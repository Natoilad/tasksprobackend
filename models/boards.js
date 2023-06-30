const { Schema, model } = require("mongoose");
const { columnSchema } = require("./columns");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set Title for Board"],
    },
    icon: {
      type: String,
      enum: [
        "none",
        "icon-dashbordicon1",
        "icon-star",
        "icon-loading-spin",
        "icon-puzzle-piece",
        "icon-container",
        "icon-lightning",
        "icon-colors",
        "icon-hexagon",
      ],
      default: "none",
    },
    background: [{ type: Schema.Types.ObjectId, ref: "Background" }],
    columns: [columnSchema],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);

boardSchema.post("save", handleMongooseError);

const addBoardSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    icon: Joi.string(),
    background: Joi.string(),
    columns: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
        })
    ),
});

const Board = model("board", boardSchema);

module.exports = {
    Board,
    boardSchema,
    addBoardSchema,
};