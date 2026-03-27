const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  let fileName = "";

  if (req.url === "/api/exercise3/pages/home") {
    fileName = "home.html";
  } else if (req.url === "/api/exercise3/pages/about") {
    fileName = "about.html";
  } else if (req.url === "/api/exercise3/pages/contact") {
    fileName = "contact.html";
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
    return;
  }

  const filePath = path.join(__dirname, "lib", fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading file");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};