import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activePage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Check for the presence of the session cookie
    const sessionCookie = Cookies.get("session");
    setIsLoggedIn(!!sessionCookie);
  }, []);

  const handleTryFreeClick = () => {
    if (!isLoggedIn) {
      alert("Please Login to try our services.");
      window.location.href = "/login";
    }
  };
  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    Cookies.remove("session");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    window.location.href ="/";
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="./logo.png" alt="Logo" className="logo" />
        <span className="website-name">Easy Emp</span>
      </div>
      <div className="navbar-middle">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={`${activePage === "home" ? "active" : "nav-link"}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/features"
              className={`${activePage === "features" ? "active" : "nav-link"}`}
            >
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pricing"
              className={`${activePage === "pricing" ? "active" : "nav-link"}`}
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="profile-menu">
          <Link to="/" className="button" onClick={handleTryFreeClick}>
            Try
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="profile-icon-container" onClick={handleProfileClick}>
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        ) : (
          <>
            <button className="button" onClick={handleTryFreeClick}>
              Try Free
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <Link to="/login" className="lgnbutton">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Log In</span>
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
