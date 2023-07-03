const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for Task"],
    },
    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "none"],
      default: "gray",
    },
    deadline: {
      type: Date,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Set userId"],
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "board",
      required: [true, "Set boardId"],
    },
    columnId: {
      type: String,
      required: [true, "Set columnId"],
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const addTaskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(1000),
  priority: Joi.string().valid("low", "medium", "high", "none"),
  deadline: Joi.string(),
  userId: Joi.string().required(),
  boardId: Joi.string().required(),
  columnId: Joi.string().required(),
});

const updateSchema = Joi.object({
  title: Joi.string().min(3).max(30),
  description: Joi.string().max(1000),
  priority: Joi.string().valid("low", "medium", "high", "none"),
  deadline: Joi.date(),
});

const transferTaskSchema = Joi.object({
  columnId: Joi.string(),
});
const Task = model("task", taskSchema);

module.exports = {
  Task,
  addTaskSchema,
  updateSchema,
  transferTaskSchema,
};
