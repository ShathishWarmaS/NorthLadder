// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://mongo_host:27017/db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Connect to Redis
const redisClient = redis.createClient({
  host: 'redis_host',
  port: 6379,
});
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});
redisClient.on('error', (error) => {
  console.error('Error connecting to Redis:', error);
});

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

