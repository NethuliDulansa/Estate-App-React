
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ favoritesCount }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Left section: Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.jpg" alt="Site Logo" className="site-logo" />
        </Link>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navigation */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          {/* Center section: Navigation links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section: Save and Sign in */}
        <div className="d-flex align-items-center ms-auto">
          {/* Save link (Favorites) */}
          <Link
            to="/my-list"
            className="favorites-link nav-link d-flex align-items-center me-3"
          >
            <i className="bi bi-bookmark-fill me-1"></i>
            <span className="favorites-count">{favoritesCount}</span>
          </Link>

          {/* Sign in link */}
          <Link
            to="/login"
            className="login-link nav-link d-flex align-items-center"
          >
            <img
              src="/images/signin.png"
              alt="Sign in"
              className="login-icon me-2"
            />
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

