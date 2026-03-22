const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (for .html direct access)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Custom clean routes
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// OPTIONAL: default route → home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
