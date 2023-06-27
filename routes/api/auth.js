const express = require('express');

const ctrl = require('../../controllers/auth');

const {
  validBody,
  authenticate,
  uploadAvatar,
} = require('../../middllware');

const { schema } = require('../../models');

const router = express.Router();

// signup routes

router.post('/register', validBody(schema.registerSchema), ctrl.register);

// signin routes

router.post('/login', validBody(schema.loginSchema), ctrl.login);

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
