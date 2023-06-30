const multer = require('multer');
const { cloudinary } = require('../helpers');

const multerConfig = multer.diskStorage({
  cloudinary: cloudinary,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadAvatar = multer({
  storage: multerConfig,
});

module.exports = uploadAvatar;
