// 404 handler for undefined routes

const notFound = (req, res, next) => {
  res.status(404).json({ message: "Not Found" }); // Send a 404 response with a message
};

module.exports = notFound;
