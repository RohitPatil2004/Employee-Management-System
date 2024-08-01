// controllers/loginController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const crypto = require('crypto');
const {storeSession} = require('./sessionStore');
const { faLocust } = require('@fortawesome/free-solid-svg-icons');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid email');
    }

    // Compare the password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send('Invalid password');
    }

    const sessionToken = crypto.randomBytes(64).toString('hex');
    storeSession(user._id, sessionToken);
    // Set the session cookie with the session token
    res.cookie('session', sessionToken, {
      httpOnly: false, // true : Prevents JavaScript from accessing the cookie
      maxAge: 2 * 60 * 1000, // Cookie expiration time (2 minutes)
    });

    res.send('Login successful!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
