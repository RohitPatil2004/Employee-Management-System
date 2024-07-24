import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/LogInPage.css";
import googleLogo from "../Assets/google.svg";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-form">
      <div className="form-container">
        <div
          className={`form-wrap ${isLogin ? "login-active" : "signup-active"}`}
        >
          <div className="form-header">
            <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
            <button className="toggle-btn" onClick={toggleForm}>
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </div>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" 
        id="email" 
        name="email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            minLength="8"
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
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Continue with Google
        </button>
      </div>
    </form>
  );
};

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePassword = (event) => {
    const password = event.target.value;
    if (password.minLength >= 8){
      alert("Password should be at least 8 characters long");
      event.target.setCustomValidity("Password must be at least 8 characters long");
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" 
        id="email" 
        name="email" 
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
        required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            minLength="8"
            required
            onChange={validatePassword}
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
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
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
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Continue with Google
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
