// Bookmarks HTTP layer. GIVEN — do not edit. Reads req.userId set by requireAuth.
const bookmarkService = require('../services/bookmarkService');

async function createBookmark(req, res, next) {
  try {
    const bookmark = await bookmarkService.addBookmark(req.userId, req.body || {});
    res.status(201).json(bookmark);
  } catch (err) {
    next(err);
  }
}

async function listBookmarks(req, res, next) {
  try {
    const bookmarks = await bookmarkService.listBookmarks(req.userId);
    res.status(200).json(bookmarks);
  } catch (err) {
    next(err);
  }
}

module.exports = { createBookmark, listBookmarks };
