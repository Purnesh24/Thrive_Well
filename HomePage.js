import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
<div className="logo">
  <img src="https://i.ibb.co/C5G0Js6L/logo-removebg-preview-1-1-1.png" alt="Thrivewell Logo" className="logo-img" />
</div>
        <nav className="navbar">
          <Link to="/emotionexplorer" className="nav-link">
            Calm check
          </Link>
          <Link to="/sleepanalysis" className="nav-link">
            Track your sleep
          </Link>
          <Link to="/emotionexplorer" className="nav-link">
            Emotional check-in
          </Link>
          <Link to="/emotionexplorer" className="nav-link">
            Mood view
          </Link>
        </nav>
        <button className="btn call-btn">How are you feeling?</button>
      </header>

      <main className="main-content">
        <h1 className="title">
          EMPOWERING MINDS <br /> ELEVATING LIVES
        </h1>
        <p className="description">
          Prioritize your mental wellness with innovative solutions designed to support and elevate your daily well-being.
        </p>
        <button className="btn main-btn">Feel Better</button>
      </main>
    </div>
  );
};

export default HomePage;
