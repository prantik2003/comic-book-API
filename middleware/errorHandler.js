// Centralized error handler

const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set default status code to 500 for unhandled errors
  res.status(statusCode).json({
    message: err.message, // Send the error message
    // Optionally send additional error details in development mode
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
