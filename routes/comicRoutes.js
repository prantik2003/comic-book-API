// Route handlers for comic-related APIs

const express = require("express");
const router = express.Router();
const comicController = require("../controllers/comicController");

router.post("/", comicController.createComicBook);
router.get("/", comicController.getAllComicBooks);
router.get("/:id", comicController.getComicBookById);
router.put("/:id", comicController.updateComicBook);
router.delete("/:id", comicController.deleteComicBook);

module.exports = router;
