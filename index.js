// index.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("🤖 Hercai AI is live! Use /v3/hercai?question=...");
});

app.get("/v3/hercai", async (req, res) => {
  const question = req.query.question;
  if (!question) return res.status(400).json({ error: "Missing question param" });

  try {
    const response = await axios.get(`https://uzairrajput-ytdl-api-master.onrender.com/v3/hercai?question=${encodeURIComponent(question)}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Hercai API failed", details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ API live on port ${PORT}`));
