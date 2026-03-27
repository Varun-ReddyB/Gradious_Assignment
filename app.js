const express = require("express");
const app = express();

require("dotenv").config();

const exercise1 = require("./exercise1");
const exercise2 = require("./exercise2");
const exercise3 = require("./exercise3");
const exercise4 = require("./exercise4");

app.use(express.json());

// ✅ Exercise 1
app.get("/api/exercise1", (req, res) => {
  exercise1(req, res);
});

// ✅ Exercise 2
app.get("/api/exercise2", (req, res) => {
  exercise2(req, res);
});

// ✅ Exercise 3 (multiple routes inside)
app.get("/api/exercise3/*", (req, res) => {
  exercise3(req, res);
});

// ✅ Exercise 4 (multiple routes inside)
app.get("/api/exercise4/*", (req, res) => {
  exercise4(req, res);
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("All Exercises Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});