// Importing required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of the express app
const app = express();

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// File to store the visitor count
const countFilePath = path.join(__dirname, 'viewCount.json');

// Function to read visitor count from the file
const getViewCount = () => {
  if (!fs.existsSync(countFilePath)) {
    // If the file doesn't exist, initialize with 0
    fs.writeFileSync(countFilePath, JSON.stringify({ count: 0 }));
  }
  const data = fs.readFileSync(countFilePath, 'utf-8');
  return JSON.parse(data).count;
};

// Function to increment and save the visitor count
const incrementViewCount = () => {
  let count = getViewCount();
  count++;
  fs.writeFileSync(countFilePath, JSON.stringify({ count }));
  return count;
};

// Set up a route for the home page
app.get('/', (req, res) => {
  const updatedCount = incrementViewCount();
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Visitor count incremented to: ${updatedCount}`);
});

// API endpoint to get the total viewer count
app.get('/api/viewers', (req, res) => {
  const count = getViewCount();
  res.json({ totalViewers: count });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
