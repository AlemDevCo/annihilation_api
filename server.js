const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let leaderstats = [];

app.get('/leaderstats', (req, res) => {
  res.json(leaderstats);
});

app.post('/leaderstats', (req, res) => {
  const newPlayerStats = req.body;

  // Assuming you want to update the existing stats if the player already exists
  const existingPlayerIndex = leaderstats.findIndex(player => player.userId === newPlayerStats.userId);

  if (existingPlayerIndex !== -1) {
    leaderstats[existingPlayerIndex] = newPlayerStats;
  } else {
    leaderstats.push(newPlayerStats);
  }

  res.json({ success: true, message: 'Leaderstats updated successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
