const path = require("path");

module.exports = (req, res) => {

  // Home
  if (req.url === "/api/exercise4/home") {
    const filePath = path.join(__dirname, "public", "home.html");
    return sendFile(res, filePath);
  }

  // About
  if (req.url === "/api/exercise4/about") {
    const filePath = path.join(__dirname, "public", "about.html");
    return sendFile(res, filePath);
  }

  // Contact
  if (req.url === "/api/exercise4/contact") {
    const filePath = path.join(__dirname, "public", "contact.html");
    return sendFile(res, filePath);
  }

  // Default → Home
  if (req.url === "/api/exercise4") {
    const filePath = path.join(__dirname, "public", "home.html");
    return sendFile(res, filePath);
  }

  // Not matched
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
};

// Helper function
function sendFile(res, filePath) {
  const fs = require("fs");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading file");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}