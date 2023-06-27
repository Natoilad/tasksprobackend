const {
  validBody,
  validFavoriteBody,
  validSubscription,
} = require('./middleware');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const uploadAvatar = require("./uploadAvatar");

module.exports = {
  validBody,
  validFavoriteBody,
  isValidId,
  authenticate,
  validSubscription,
  uploadAvatar,
};
