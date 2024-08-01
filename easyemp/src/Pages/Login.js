import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../Assets/google.svg";
import { Link, Navigate } from "react-router-dom";
import "../Styles/Login.css";
import axios from 'axios'; // Import axios for HTTP requests

const LoginForm = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirect, setRedirect] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    // Basic validation
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:8002/login', {
        email,
        password,
      });
      setSuccess(response.data); // Handle successful login
      setError('');
      setRedirect(true); // Trigger redirect on successful login
    } catch (err) {
      setError(err.response?.data || 'An error occurred'); // Handle errors
      setSuccess('');
    }
  };

  if (redirect){
    return <Navigate to="/home" />
  }

  return (
    <div className="login-signup-form">
      <div className="form-container">
        <div className="form-wrap login-active">
          <div className="form-header">
            <h2>Log In</h2>
            <Link to="/signup" className="toggle-btn">Signup</Link>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
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
              <button type="submit" className="submit-btn">
                Log In
              </button>
            </div>
            <div className="form-group">
              <a href="#forgot" className="forgot-password">
                Forgot Password?
              </a>
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

export default LoginForm;
