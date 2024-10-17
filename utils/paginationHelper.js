// Pagination helper function

/**
 * A helper function to implement pagination logic.
 * @param {Number} page - The current page number.
 * @param {Number} limit - The number of items to display per page.
 * @returns {Object} - An object containing skip and limit values.
 */
const paginate = (page, limit) => {
  const currentPage = page > 0 ? page : 1; // Ensure the page is not negative or zero
  const perPage = limit > 0 ? limit : 10; // Default limit to 10 if limit is not valid

  const skip = (currentPage - 1) * perPage;

  return {
    skip,
    limit: perPage,
  };
};

module.exports = paginate;
