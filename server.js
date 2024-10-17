// Entry point of the application

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");            // Optional: Import CORS middleware
const helmet = require("helmet");         // Optional: Import Helmet for security
const connectDB = require("./config/dbConfig");
const comicRoutes = require("./routes/comicRoutes");
const errorHandler = require("./middleware/errorHandler");        // Import error handler
const notFound = require("./middleware/notFound");          // Import not found handler

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Optional: Enable CORS
app.use(helmet()); // Optional: Add security headers with Helmet

// Routes
app.use("/api/comics", comicRoutes);

// Not Found Handler (must come after all other routes)
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});