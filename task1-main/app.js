const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route that returns a message
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from CI/CD Pipeline!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start the server only when this file is executed directly
// This prevents the server from starting during tests (Jest imports the app)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

module.exports = app;
