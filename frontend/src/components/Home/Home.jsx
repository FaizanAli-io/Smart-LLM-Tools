import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { categories } from "../../assets/categories";
import "./Home.css";

export default function Hero() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateHero(true);
  }, []);

  // Navigate to category page
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  // Navigate directly to prompt creator
  const handleRecentPromptClick = (categoryId, serviceName) => {
    navigate(`/prompt-creator/${categoryId}/${serviceName.replace(/\s+/g, "-")}`);
  };

  // Search input change handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Search form submit handler
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add any search submission logic here
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

  // Extract all services, including nested ones from content writing
  const allServices = categories.flatMap((category) => {
    if (Array.isArray(category.services)) {
      return category.services.map((service) => ({
        name: service,
        category: category.id,
      }));
    } else if (typeof category.services === "object") {
      return Object.entries(category.services).flatMap(([section, services]) =>
        services.map((service) => ({
          name: service,
          category: category.id,
        }))
      );
    }
    return [];
  });

  // Filter services based on search term
  const filteredServices = allServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page-section">
      {/* Hero Section with animated gradient background */}
      <div className="hero-section">
        {/* Decorative elements moved to lower z-index */}
        <div className="hero-decoration">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className={`hero-container ${animateHero ? 'hero-animate' : ''}`}>
          <div className="hero-content">
            <h1 className="hero-title">AI-Powered Business & Marketing Tools at Your Fingertips</h1>
            <p className="hero-subtext">Enter your info and get instant, tailored results</p>

            {/* Search Bar - Fixed structure */}
            <div className="search-container">
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search AI Tools..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </form>
              
              {/* Search results moved outside form */}
              
            </div>
          </div>
        </div>
        
      </div>
      {searchTerm && (
                <div className="search-results">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                      <div
                        key={index}
                        className="search-result-item"
                        onClick={() => handleRecentPromptClick(service.category, service.name)}
                      >
                        {service.name}
                      </div>
                    ))
                  ) : (
                    <p className="no-results">No results found</p>
                  )}
                </div>
              )}

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

              <h5 className="service-name">{category.name}</h5>
              <p className="service-description">{category.description}</p>
            </div>
          ))}
        </div>
      </MDBContainer>

      {/* Recently Used Section */}
      <div className="recently-used-background">
        <MDBContainer className="recently-used-section py-5">
          <h2 className="section-title">Recently Used</h2>
          <div className="recently-used-grid">
            {recentlyUsed.map((service, index) => (
              <div
                key={index}
                className="recent-service-card"
                onClick={() => handleRecentPromptClick(service.category, service.name)}
              >
                <div className="recent-service-icon">
                  <i className="fas fa-history"></i>
                </div>
                <p className="recent-service-name">{service.name}</p>
              </div>
            ))}
          </div>
        </MDBContainer>
      </div>
    </div>
  );
}