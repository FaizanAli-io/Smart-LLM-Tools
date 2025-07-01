import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import "./Navbar.css";
import logo from "../../assets/smart-llm-logo.png";
import { categories } from "../../assets/categories";

export default function Navbar() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <MDBNavbar fixed="top" light className="navbar-custom">
      <MDBContainer fluid className="header-navbar">
        {/* Logo */}
        <MDBNavbarBrand onClick={handleLogoClick} className="navbar-logo">
          <img src={logo} height="60" alt="Smart LLM Logo" loading="lazy" />
        </MDBNavbarBrand>

        {/* Categories Navigation
        <div className="nav-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-nav-btn"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Login & Signup Buttons */}
        <div className="nav-buttons">
          <button
            className="nav-btn login-home-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="nav-btn signup-home-btn"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}