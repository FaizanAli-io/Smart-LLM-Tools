import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { categories } from "../../assets/categories";
import "./Home.css";

export default function Hero() {
  const navigate = useNavigate();

  // Navigate to category page
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  // Navigate directly to prompt creator
  const handleRecentPromptClick = (categoryId, serviceName) => {
    navigate(`/prompt-creator/${categoryId}/${serviceName.replace(/\s+/g, "-")}`);
  };

  // Hardcoded recently used services
  const recentlyUsed = [
    { name: "Business Marketing Plan", category: "business-services" },
    { name: "Summarise This", category: "daily-business-tools" },
    { name: "Keywords Generator", category: "marketing-seo" },
    { name: "Home Page", category: "content-writing" },
    { name: "Decision Maker", category: "daily-business-tools" },
    { name: "Competitor Analysis", category: "business-services" },
  ];

  return (
    <div className="home-page-section">
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
        <h2 className="section-title">AI Tool Categories</h2>
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

      {/* Recently Used Section */}
      <MDBContainer className="recently-used-section py-5">
        <h2 className="section-title">Recently Used</h2>
        <div className="recently-used-grid">
          {recentlyUsed.map((service, index) => (
            <div
              key={index}
              className="recent-service-card"
              onClick={() => handleRecentPromptClick(service.category, service.name)}
            >
              <p className="recent-service-name">{service.name}</p>
            </div>
          ))}
        </div>
      </MDBContainer>
    </div>
  );
}
