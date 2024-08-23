// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  position: String,
  name: String,
  is_admin: Boolean,
  address: String,
  phone_no: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
