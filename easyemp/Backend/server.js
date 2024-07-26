// Import required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Create an Express app
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a port for the server to listen on
const port = process.env.PORT;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Define routes
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});


// // Define a route to register a new user
// app.post('/api/register', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     await user.save();
//     res.send('User created successfully!');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// // Define a route to login an existing user
// app.post('/api/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(401).send('Invalid email or password');
//     }
//     const isValidPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!isValidPassword) {
//       return res.status(401).send('Invalid email or password');
//     }
//     res.send('Login successful!');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
