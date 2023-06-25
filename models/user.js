const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      // default: "user",
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      unique: true,
      match: emailRegexp,
      required: [true, "Email is required"],
    },
    // subscription: {
    //   type: String,
    //   enum: ["starter", "pro", "business"],
    //   default: "starter",
    // },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      // required: true,
      default: "",
    },
    // verify: {
    //   type: Boolean,
    //   default: false,
    // },
    // verificationToken: {
    //   type: String,
    //   required: [true, "Verify token is required"],
    // },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

// const registerSchema = Joi.object({
//   name: Joi.string(),
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

// const loginSchema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

// const updateSubscription = Joi.object({
//   subscription: Joi.string().valid('starter', 'pro', 'business'),
// });
// const emailSchema = Joi.object({
//   email: Joi.string().required(),
// });

const schema = {
  registerSchema,
  loginSchema,
  // updateSubscription,
  // emailSchema,
};

const User = model('user', userSchema);

module.exports = {
  User,
  schema,
};
