// repositories/bookmarkRepository.js
//
// ── TASK 1 (6 marks): Prisma-backed bookmark storage ─────────────────────────
// Use the shared Prisma client to read/write the Bookmark table. Keep ALL Prisma
// calls here — services and controllers must never touch Prisma directly.
const prisma = require('../db/prisma');

// createBookmark({ userId, title, url })
//   Insert one Bookmark row and return the created bookmark.
//   Hint: return prisma.bookmark.create({ data: { userId, title, url } });
async function createBookmark({ userId, title, url }) {
  // TODO (Task 1a): create and return the bookmark.
}

// listBookmarksByUser(userId)
//   Return that user's bookmarks, newest first.
//   Hint: return prisma.bookmark.findMany({
//            where: { userId },
//            orderBy: { createdAt: 'desc' },
//          });
async function listBookmarksByUser(userId) {
  // TODO (Task 1b): find and return the user's bookmarks, newest first.
}

module.exports = { createBookmark, listBookmarksByUser };
