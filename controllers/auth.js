const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { HttpError, ctrlWrapper, cloudinary } = require("../helpers");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = "";

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    user: { email: newUser.email, name: newUser.name },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token: token,
    user: { email: user.email, theme: user.theme, avatarUrl: user.avatarURL },
  });
};

const getCurrent = async (req, res) => {
  const { email, name, token, id, theme, avatarURL } = req.user;

  res.json({
    email,
    name,
    token,
    _id: id,
    theme,
    avatarUrl: avatarURL,
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json();
};

const updateUser = async (req, res) => {
  const { _id } = req.params;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found ");
  }
  res.json(result);
};

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload } = req.file;
  const resultUpload = await cloudinary.uploader.upload(tempUpload, {
    folder: "avatars",
    transformation: {
      height: 150,
      gravity: "face",
      crop: "thumb",
      aspect_ratio: 5 / 6,
      zoomed: 0.75,
    },
  });

  const avatarURL = resultUpload.secure_url;
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

const updateTheme = async (req, res) => {
  const { _id } = req.user;
  const { theme } = req.body;
  await User.findByIdAndUpdate(_id, { theme: theme }, { new: true });

  res.json({
    theme,
  });
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateUser: ctrlWrapper(updateUser),
  updateAvatar: ctrlWrapper(updateAvatar),
  updateTheme: ctrlWrapper(updateTheme),
};
