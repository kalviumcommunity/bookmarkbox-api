const prisma = require('../db/prisma');

async function createBookmark({ userId, title, url }) {
  return prisma.bookmark.create({
    data: { userId, title, url },
  });
}

async function listBookmarksByUser(userId) {
  return prisma.bookmark.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

module.exports = { createBookmark, listBookmarksByUser };