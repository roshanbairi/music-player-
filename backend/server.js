const express = require('express');
const path = require('path');
const app = express();

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/songs', express.static(path.join(__dirname, 'songs')));

// Serve song list
app.get('/api/songs', (req, res) => {
  const songs = [
    { name: "Song1", file: "songs/song1.mp3" },
    { name: "Song2", file: "songs/song2.mp3" }
  ];
  res.json(songs);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
