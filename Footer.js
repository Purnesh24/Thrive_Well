import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Thrivewell. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">Calm check</a></li>
          <li><a href="/services">Track your sleep</a></li>
          <li><a href="/contact">Emotional check-in</a></li>
            <li><a href="/privacy">Mood view</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
