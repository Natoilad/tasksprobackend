const express = require('express');

const ctrl = require('../../controllers/auth');

const {
  validBody,
  authenticate,
  validSubscription,
  uploadAvatar,
} = require('../../middllware');

const { schema } = require('../../models/user');

const router = express.Router();

// signup routes

router.post('/register', validBody(schema.registerSchema), ctrl.register);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post('/verify', validBody(schema.emailSchema), ctrl.resendVerifyEmail);

// signin routes

router.post('/login', validBody(schema.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/',
  authenticate,
  validSubscription(schema.updateSubscription),
  ctrl.updateSubscription
);

router.patch(
  '/avatars',
  authenticate,
  uploadAvatar.single('avatar'),
  ctrl.updateAvatar
);

module.exports = router;
