import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../Assets/google.svg";
import { Link, Navigate } from "react-router-dom";
import "../Styles/Signup.css";
import axios from 'axios'; // Import axios for HTTP requests

const SignupForm = () => {
  useEffect(() => {
    document.title = "Signup";
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirect, setRedirect] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length<8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:8002/signup', {
        email,
        password,
      });
      setSuccess(response.data); // Handle successful registration
      setError('');
      setRedirect(true); // Trigger redirect on successful register
    } catch (err) {
      setError(err.response?.data || 'An error occurred'); // Handle errors
      setSuccess('');
    }
  };

  if (redirect){
    return <Navigate to="/login" />
  }

  return (
    <div className="login-signup-form">
      <div className="form-container">
        <div className="form-wrap signup-active">
          <div className="form-header">
            <h2>Sign Up</h2>
            <Link to="/login" className="toggle-btn">
              Login
            </Link>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                  className="password-toggle-icon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </div>
            <div className="form-group">
              <button className="google-btn">
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="google-logo"
                />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
