const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Serve HTML

app.get("/api/hercai", async (req, res) => {
  const { message } = req.query;

  if (!message) return res.status(400).json({ error: "message query missing" });

  try {
    const response = await axios.get(`https://hercai.onrender.com/v3/hercai?question=${encodeURIComponent(message)}`);
    res.json({ response: response.data.reply });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from Hercai", detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Uzair Rajput Hercai API running at http://localhost:${PORT}`);
});
