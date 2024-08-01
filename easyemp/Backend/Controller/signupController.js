// controllers/signupController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Generate random string (if needed, for other purposes)
    // const randomString = generateRandomString(10); // Example usage

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 3);

    // Create and save the user
    const user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();

    res.send('User created successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
