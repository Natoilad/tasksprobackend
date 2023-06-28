const express = require('express');
const {
  validBody,
  validFavoriteBody,
} = require('../../middlewares/middleware.js');
const ctrl = require('../../controllers/contact-controllers.js');
const { schema } = require('../../models/contact.js');
const isValidId = require('../../middlewares/isValidId.js');
const authenticate = require('../../middlewares/authenticate.js');

const router = express.Router();
router.get('/', authenticate, ctrl.listContacts);
router.get('/:contactId', authenticate, isValidId, ctrl.getContactById);
router.post('/', authenticate, validBody(schema.addSchema), ctrl.addContact);
router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validBody(schema.addSchema),
  ctrl.updateContact
);
router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validFavoriteBody(schema.updateFavoriteSchema),
  ctrl.updateFavoriteContact
);
router.delete('/:contactId', isValidId, ctrl.removeContact);
module.exports = router;
