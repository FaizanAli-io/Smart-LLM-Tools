import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { signupUser } from "../../api/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending signup data:", { name, email, password });
      const response = await signupUser({ name, email, password });

      console.log("Signup success:", response);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error?.response?.data || error.message);

      alert(
        error?.response?.data?.message ||
          error?.response?.data?.message?.[0] ||
          "Signup failed. Try using a different email.",
      );
    }
  };

  return (
    <div className="signup-page">
      <MDBContainer className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">Create an Account</h2>
          <p className="signup-subtitle">Join us today</p>

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </form>
        </div>
      </MDBContainer>
    </div>
  );
}
