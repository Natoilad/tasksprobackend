const express = require('express');

const ctrl = require('../../controllers/auth');

const {
  validBody,
  authenticate,
  uploadAvatar,
} = require('../../middlewares');

const { schema } = require('../../models/user');
const { themeSchema } = require("../../models/index");
const router = express.Router();

router.post('/register', validBody(schema.registerSchema), ctrl.register);

router.post('/login', validBody(schema.loginSchema), ctrl.login);

router.patch("/theme", authenticate, validBody(themeSchema), ctrl.updateTheme)

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.put(
  "/:_id",
  authenticate,
  validBody(schema.registerSchema),
  ctrl.updateUser
);

router.patch(
  '/avatars',
  authenticate,
  uploadAvatar.single('avatar'),
  ctrl.updateAvatar
);

module.exports = router;
