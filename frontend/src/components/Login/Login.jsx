import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import "./Login.css";
import { loginUser } from "../../api/auth";
import { useAuth } from "../../api/authContext";


export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Hook to update auth state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending login data:", { email, password });

      const res = await loginUser({ email, password }); // ✅ Use object
      login(res.token); // ✅ Save token to localStorage & update context
      console.log("Login successful:", res);
      navigate("/"); // ✅ Redirect

    } catch (err) {
      console.error("Login failed:", err?.response?.data || err.message);
      alert(
        err?.response?.data?.message?.[0] ||
        err?.response?.data?.message ||
        "Login failed. Try again."
      );
    }
  };

  return (
    <div className="login-page">
      <MDBContainer className="login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to continue</p>

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-link">
              Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
          </form>
        </div>
      </MDBContainer>
    </div>
  );
}
