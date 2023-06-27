const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    theme: {
      type: String,
      enum: ["dark", "light", "violet"],
      default: "dark",
    },
    email: {
      type: String,
      unique: true,
      match: emailRegexp,
      required: [true, "Email is required"],
    },

    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schema = {
  registerSchema,
  loginSchema,
};
const themeSchema = Joi.object({
  theme: Joi.string().valid("dark", "light", "violet").required(),
});
const User = model("user", userSchema);
const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
module.exports = {
  User,
  schema,
  themeSchema,
  emailSchema,
};
