
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import "../Navbar/Navbar.css";
import logo from "../../assets/smart-llm-logo.png";
import { categories } from "../../assets/categories";

export default function Navbar() {
  const navigate = useNavigate();
  const [allowedCategories, setAllowedCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllowedCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in localStorage");
          setLoading(false);
          return;
        }

        console.log("Fetching allowed categories...");
        const res = await fetch(`https://api-ai-biz-services.bizg.co.uk/api/admin/my-categories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Server responded with error:", errorText);
          throw new Error("Failed to fetch categories");
        }

        const response = await res.json();
        console.log("Categories response:", response);
        
        // Extract allowedCategories array from the response object
        const allowedCategoryNames = response.allowedCategories || [];
        setAllowedCategories(allowedCategoryNames);
        
      } catch (error) {
        console.error("Failed to fetch allowed categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllowedCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Filter categories based on user's allowed categories
  const filteredCategories = categories.filter((category) => {
    // Check if the category name matches any of the allowed categories
    // Handle case variations and potential naming differences
    return allowedCategories.some((allowedCat) => 
      allowedCat.toLowerCase().replace(/\s+/g, '-') === category.id.toLowerCase() ||
      allowedCat.toLowerCase() === category.name.toLowerCase() ||
      allowedCat.toLowerCase().replace(/\s+/g, '') === category.name.toLowerCase().replace(/\s+/g, '')
    );
  });

  return (
    <MDBNavbar fixed="top" light className="navbar-custom">
      <MDBContainer fluid className="header-navbar">
        {/* Logo */}
        <MDBNavbarBrand onClick={handleLogoClick} className="navbar-logo">
          <img src={logo} height="60" alt="Smart LLM Logo" loading="lazy" />
        </MDBNavbarBrand>
        
        {/* Categories Navigation - Only show allowed categories */}
        <div className="nav-categories">
          {!loading && filteredCategories.map((category) => (
            <button
              key={category.id}
              className="category-nav-btn"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
          {loading && (
            <span className="loading-categories">Loading...</span>
          )}
        </div>
        
        {/* Login & Signup Buttons */}
        <div className="nav-buttons">
          <button
            className="nav-btn login-home-btn"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}