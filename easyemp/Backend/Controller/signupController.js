// controllers/signupController.js
const bcrypt = require('bcryptjs');
const User = require('../Models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Generate random string (if needed, for other purposes)
    // const randomString = generateRandomString(10); // Example usage
    const employeePosition = "emp";
    const name = "none";
    const address = "none";
    const phone_no = 0;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 3);

    // Create and save the user
    const user = new User({
      email,
      password: hashedPassword,
      name: name,
      position: employeePosition,
      is_admin: false,
      address: address,
      phone_no: phone_no,
    });
    await user.save();

    res.send('User created successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
