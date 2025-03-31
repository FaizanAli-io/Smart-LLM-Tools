import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { categories } from "../../assets/categories";
import "./Home.css";

export default function Hero() {
  const navigate = useNavigate();

  // Category Data
 

  // Navigate to category page
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">AI-Powered Business & Marketing Tools at Your Fingertips</h1>
          <p className="hero-subtext">Enter your info and get instant, tailored results</p>

          {/* Search Bar */}
          <div className="search-container">
            <form className="search-form">
              <input type="text" className="search-input" placeholder="Search AI Tools" />
            </form>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <MDBContainer className="services-section py-5">
        <div className="services-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="service-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="service-icon-wrapper">
                <img src={category.image} alt={category.name} className="service-icon" />
              </div>
              <h5 className="service-name">{category.name}</h5>
              <p className="service-description">{category.description}</p>
            </div>
          ))}
        </div>
      </MDBContainer>
    </>
  );
}
