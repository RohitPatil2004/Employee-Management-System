import React from "react";
import { Link } from "react-router-dom";
import "./sideNav.css";

const sideNav = ({user = { name: 'Guest', position: 'Admin', isAdmin: false }, activePage}) => {
    return (
        <div className="navbar1">
            <div className="navbar-top1">
                <br />
                <h1>Easy Emp</h1>
                <br />
                <span>{user.name}</span>
                <span>{user.position}</span>
            </div>
            <div className="navbar-middle1">
                <span>Menu</span>
                <br />
                <ul className="navbar-nav1">
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "dashboard" ? "active" : "nav-link"}`}>Dashboard</Link>
                    </li>
                    {user.isAdmin && (
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "employee" ? "active" : "nav-link"}`}>Employee</Link>
                    </li>
                    )}
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "email" ? "active" : "nav-link"}`}>Email</Link>
                    </li>
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "teams" ? "active" : "nav-link"}`}>Teams</Link>
                    </li>
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "daily activity" ? "active" : "nav-link"}`}>Daily Activity</Link>
                    </li>
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "time and attendance" ? "active" : "nav-link"}`}>Time And Attendance</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-bottom1">
                <span>Account</span>
                <ul className="navbar-nav1">
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "profile" ? "active" : "nav-link"}`}>Profile</Link>
                    </li>
                    <li className="nav-item1">
                        <Link to="/dashboard" className={`${activePage === "setting" ? "active" : "nav-link"}`}>Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
;
export default sideNav;
