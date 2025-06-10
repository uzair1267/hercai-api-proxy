const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/hercai', async (req, res) => {
  const message = req.query.message;
  if (!message) return res.status(400).json({ error: 'Missing message query' });

  try {
    const { data } = await axios.get(`https://uzairrajput-ytdl-api-master.onrender.com/v3/hercai?question=${encodeURIComponent(message)}`);
    res.json({ response: data.reply });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong with Hercai API' });
  }
});

app.listen(PORT, () => {
  console.log(`Uzair Rajput Mtx 😈🪽 🚀 Server running on ✅ port ${PORT}`);
});
