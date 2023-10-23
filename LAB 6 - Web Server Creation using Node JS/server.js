const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JavaScript) from a directory named 'public'
app.use(express.static('public'));

// Define a simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
