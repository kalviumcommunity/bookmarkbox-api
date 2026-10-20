// Bookmark business logic. GIVEN — do not edit. Delegates to the repository.
const bookmarkRepository = require('../repositories/bookmarkRepository');
const AppError = require('../errors/AppError');

async function addBookmark(userId, { title, url }) {
  if (typeof title !== 'string' || title.trim() === '') {
    throw new AppError(400, 'INVALID_INPUT', 'title is required');
  }
  if (typeof url !== 'string' || url.trim() === '') {
    throw new AppError(400, 'INVALID_INPUT', 'url is required');
  }
  return bookmarkRepository.createBookmark({ userId, title: title.trim(), url: url.trim() });
}

async function listBookmarks(userId) {
  return bookmarkRepository.listBookmarksByUser(userId);
}

module.exports = { addBookmark, listBookmarks };
