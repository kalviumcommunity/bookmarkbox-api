// GIVEN — do not edit. Every bookmark route is protected by requireAuth.
const express = require('express');
const bookmarkController = require('../controllers/bookmarkController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);
router.post('/', bookmarkController.createBookmark);
router.get('/', bookmarkController.listBookmarks);

module.exports = router;
