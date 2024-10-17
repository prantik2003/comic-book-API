// Functions to create, read, update, delete comics

const ComicBook = require("../models/comicModel");

// Create a new comic book
const createComicBook = async (comicData) => {
  const comicBook = new ComicBook(comicData);
  return await comicBook.save();
};

// Get all comic books with pagination, filtering, and sorting
const getAllComicBooks = async (query, page, limit, sortBy, order) => {
  const filter = {};

  // Filtering logic
  if (query.author) {
    filter.authorName = new RegExp(query.author, "i"); // Case-insensitive author search
  }
  if (query.year) {
    filter.yearOfPublication = query.year;
  }
  if (query.price) {
    filter.price = { $lte: query.price }; // Finds comics priced less than or equal to specified price
  }
  if (query.condition) {
    filter.condition = query.condition;
  }

  // Sorting logic
  const sortOrder = order === "desc" ? -1 : 1;
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder; // Dynamically sorts based on passed sortBy parameter

  // Pagination and query execution
  const comicBooks = await ComicBook.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort(sortOptions);

  // Count total documents for pagination info
  const total = await ComicBook.countDocuments(filter);

  return { total, comicBooks };
};

// Get a comic book by ID
const getComicBookById = async (id) => {
  return await ComicBook.findById(id);
};

// Update a comic book
const updateComicBook = async (id, comicData) => {
  return await ComicBook.findByIdAndUpdate(id, comicData, { new: true });
};

// Delete a comic book
const deleteComicBook = async (id) => {
  return await ComicBook.findByIdAndDelete(id);
};

module.exports = {
  createComicBook,
  getAllComicBooks,
  getComicBookById,
  updateComicBook,
  deleteComicBook,
};
