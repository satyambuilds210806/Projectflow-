const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("ProjectFlow Backend is running 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "API is working 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
