// controllers/loginController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const crypto = require('crypto');
const {storeSession, getSession} = require('./sessionStore');
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
    const sessionExpiration = Date.now()+2*60*1000;
    storeSession(user._id, sessionToken, sessionExpiration);
    // Set the session cookie with the session token
    res.cookie('session', sessionToken, {
      httpOnly: false, // true : Prevents JavaScript from accessing the cookie
      expires: new Date(sessionExpiration),
      maxAge: 2*60*1000,
    });

    res.send('Login successful!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.keepAlive = async(req, res) => {
  try {
    const {sessionToken} = req.cookie;
    if (!sessionToken) {
      return res.status(401).send('No session token provided');
    }
    const session = getSession(sessionToken);
    if (!session) {
      return res.status(401).send('Invalid session token');
    }
    const newExpiration = Date.now() + 2 * 60 * 1000; // 2 minutes from now
    storeSession(session.userId, sessionToken, newExpiration);
    res.cookie('session', sessionToken, {
      httpOnly: false,
      expires: new Date(newExpiration),
      maxAge: 2*60*1000,
    });
    res.send('Session Refreshed');
  } catch (error) {
    res.status(400).send(error.message);
  }
};