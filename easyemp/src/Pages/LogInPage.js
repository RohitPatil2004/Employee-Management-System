import React, { useState } from "react";
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
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
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
  return (
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
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
