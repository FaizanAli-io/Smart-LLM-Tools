import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className="signup-page">
      <MDBContainer className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">Create an Account</h2>
          <p className="signup-subtitle">Join us today</p>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="input-wrapper">
              <input
                type="text"
                id="name"
                className={`signup-input ${name ? "filled" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name">Full Name</label>
            </div>

            {/* Email Input */}
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                className={`signup-input ${email ? "filled" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>

            {/* Password Input */}
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                className={`signup-input ${password ? "filled" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Signup Button */}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            {/* Login Link */}
            <p className="login-link">
              Already have an account? <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </form>
        </div>
      </MDBContainer>
    </div>
  );
}
