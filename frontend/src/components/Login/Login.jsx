import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
    navigate('/')
  };

  return (
    <div className="login-page">
      <MDBContainer className="login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to continue</p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                className={`login-input ${email ? "filled" : ""}`}
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
                className={`login-input ${password ? "filled" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login
            </button>

            {/* Sign Up Link */}
            <p className="signup-link">
              Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
          </form>
        </div>
      </MDBContainer>
    </div>
  );
}
