const response = require('../utils/response');
const { TagError } = require('../middleware/errorhandling');
const { allTags, tagsWithArticles } = require('../services/tag');

/**
 * Get all tags name.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 *
 * @return {Promise<object>} -Tag names without any association.
 *
 */
async function getTags(req, res) {
  const data = await allTags();
  if (!data) {
    throw new TagError('Error getting tags from database.');
  }
  res.status(200).json(response(200, data, 'Success!'));
}

/**
 * Get all tags name with articles.
 * Sorting the tags by number of articles have a tag.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 *
 * @return {Promise<object>} -Tag names with article(username) & comment(username).
 *
 */
async function getTagsWithArticles(req, res) {
  const tags = await tagsWithArticles();
  const sortingTags = tags.sort(
    (a, b) => b.Articles.length - a.Articles.length
  );
  res.status(200).json(response(200, sortingTags, 'Success!'));
}

module.exports = {
  getTags,
  getTagsWithArticles,
};
