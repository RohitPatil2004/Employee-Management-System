import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/NavBar.css';

const NavBar = ({ activePage }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="./logo.png" alt="Logo" className="logo" />
        <span className="website-name">Easy Emp</span>
      </div>
      <div className="navbar-middle">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className={`${activePage === 'home' ? 'active' : 'nav-link'}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className={`${activePage === 'features' ? 'active' : 'nav-link'}`}>
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className={`${activePage === 'pricing' ? 'active' : 'nav-link'}`}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button class="button">
          Try Free
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
          </svg>
        </button>
        <button class="lgnbutton">
          <span class="button_lg">
            <span class="button_sl"></span>
            <span class="button_text">Log In</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
