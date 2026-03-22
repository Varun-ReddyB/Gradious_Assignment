const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 80;

const server = http.createServer((req, res) => {
  if (req.url === "/api/exercise2") {
    const filePath = path.join(__dirname, "lib", "users.txt");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
        return;
      }

      const lines = data.trim().split("\n");

      const headers = lines[0].split("|").map((h) => h.trim());

      let html = `
                <html>
                <head><title>Users Table</title></head>
                <body>
                <table border="1">
            `;

      // Headers
      html += "<tr>";
      headers.forEach((h) => {
        html += `<th>${h}</th>`;
      });
      html += "</tr>";

      // ALL rows (including duplicates)
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split("|").map((c) => c.trim());

        html += "<tr>";
        cols.forEach((col) => {
          html += `<td>${col}</td>`;
        });
        html += "</tr>";
      }

      html += `
                </table>
                </body>
                </html>
            `;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
