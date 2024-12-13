// Import dependencies
const jsonServer = require("json-server");
const dotenv = require("dotenv");

// Load environment variables from a .env file, if available
dotenv.config();

// Create the server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set the port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Use default middlewares (CORS, logger, etc.)
server.use(middlewares);

// Use the router
server.use(router);

// Add a fallback route for unmatched requests
server.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
