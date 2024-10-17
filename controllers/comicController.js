const comicService = require("../services/comicService");

// Create a new comic book
const createComicBook = async (req, res) => {
  try {
    const comicBook = await comicService.createComicBook(req.body);
    res.status(201).json(comicBook); // HTTP 201 for a successfully created resource
  } catch (error) {
    console.error("Error creating comic book:", error.message);
    res.status(400).json({ message: error.message }); // HTTP 400 for bad requests
  }
};

// Get all comic books with pagination, filtering, and sorting
const getAllComicBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = "price", order = "asc" } = req.query;

    // Validate sorting order is either 'asc' or 'desc'
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const comicBooks = await comicService.getAllComicBooks(
      req.query,
      parseInt(page), // Ensure page is an integer
      parseInt(limit), // Ensure limit is an integer
      sortBy,
      sortOrder
    );

    // Testable response with meta-data
    res.status(200).json({
      success: true,
      totalRecords: comicBooks.total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(comicBooks.total / limit),
      comicBooks: comicBooks.comicBooks,
    });
  } catch (error) {
    console.error("Error fetching comic books:", error.message);
    res.status(500).json({ message: "Failed to fetch comic books." }); // HTTP 500 for server errors
  }
};

// Get a comic book by ID
const getComicBookById = async (req, res) => {
  try {
    const comicBook = await comicService.getComicBookById(req.params.id);
    if (!comicBook) {
      return res.status(404).json({ message: "Comic book not found" }); // HTTP 404 for not found
    }
    res.status(200).json(comicBook);
  } catch (error) {
    console.error("Error fetching comic book by ID:", error.message);
    res.status(500).json({ message: "Failed to fetch comic book." });
  }
};

// Update a comic book by ID
const updateComicBook = async (req, res) => {
  try {
    const comicBook = await comicService.updateComicBook(
      req.params.id,
      req.body
    );
    if (!comicBook) {
      return res.status(404).json({ message: "Comic book not found" });
    }
    res.status(200).json(comicBook);
  } catch (error) {
    console.error("Error updating comic book:", error.message);
    res.status(500).json({ message: "Failed to update comic book." });
  }
};

// Delete a comic book by ID
const deleteComicBook = async (req, res) => {
  try {
    const comicBook = await comicService.deleteComicBook(req.params.id);
    if (!comicBook) {
      return res.status(404).json({ message: "Comic book not found" });
    }
    res.status(204).send(); // No content returned after successful delete
  } catch (error) {
    console.error("Error deleting comic book:", error.message);
    res.status(500).json({ message: "Failed to delete comic book." });
  }
};

module.exports = {
  createComicBook,
  getAllComicBooks,
  getComicBookById,
  updateComicBook,
  deleteComicBook,
};
