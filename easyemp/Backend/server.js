// Import required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { signup } = require('./Controller/signupController');
const { login } = require('./Controller/loginController');
const { removeSession } = require('./Controller/sessionStore'); // Ensure usage or remove
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Server port
const port = process.env.PORT || 8002;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});
app.post('/signup', signup);
app.post('/login', login);


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
