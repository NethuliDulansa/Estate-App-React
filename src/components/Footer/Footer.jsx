import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and subscription form section */}
        <div className="footer-logo">
          <h1>RentUP</h1>
          <p>Do You Need Help With Anything?</p>
          <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>
          {/* Email subscription form */}
          <form className="subscribe-form">
            <input type="email" placeholder="Email Address" className="subscribe-input" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
        {/* Footer navigation links */}
        <div className="footer-links">
          {/* Layout links */}
          <div>
            <h4>LAYOUTS</h4>
            <ul>
              <li>Home Page</li>
              <li>About Page</li>
              <li>Service Page</li>
              <li>Property Page</li>

            </ul>
          </div>
          {/* Section links */}
          <div>
            <h4>ALL SECTIONS</h4>
            <ul>
              <li>Headers</li>
              <li>Features</li>
              <li>Videos</li>
              <li>Footers</li>
            </ul>
          </div>
          {/* Company links */}
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Login</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 RentUP. Design By Nethuli Liyanaarachchi.</p>
      </div>
    </footer>
  );
};

export default Footer;
