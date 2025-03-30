import React from "react";
import "./Home.css";

export default function Hero() {
  return (

      <div className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">AI-Powered Business & Marketing Tools at Your Fingertips</h1>
          <p className="hero-subtext">Enter your info and get instant, tailored results</p>

          {/* Search Bar */}
          <div className="search-container">
            <form className="search-form">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search AI Tools"
              />
            </form>
          </div>
        </div>
      </div>
  );
}
