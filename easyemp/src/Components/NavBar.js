import React from 'react';
import '../Styles/NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="/logo.png" alt="Logo" className="logo" />
                <span className="website-name">Easy Emp</span>
            </div>
            <div className="navbar-middle">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#features" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#pricing" className="nav-link">Pricing</a>
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
                        <span class="button_text">Download Now</span>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default NavBar;
