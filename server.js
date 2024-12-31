
// Importing required modules
const express = require('express');
const path = require('path');

// Create an instance of the express app
const app = express();

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Example: Live viewer count (you can modify this for real-time updates)
let viewerCount = 0;

// API endpoint to get the live viewer count
app.get('/api/viewers', (req, res) => {
  res.json({ viewers: viewerCount });
});

// Example endpoint to simulate viewer count increment
app.post('/api/increment-viewer', (req, res) => {
  viewerCount++;
  res.json({ message: 'Viewer count incremented', viewers: viewerCount });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
