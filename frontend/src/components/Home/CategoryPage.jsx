import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MDBContainer, MDBCardTitle } from "mdb-react-ui-kit";
import { categories } from "../../assets/categories";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    // Animation effect similar to home page
    const headerElement = document.querySelector(".category-header");
    if (headerElement) {
      setTimeout(() => {
        headerElement.classList.add("category-animate");
      }, 100);
    }
  }, []);

  if (!category) {
    return (
      <MDBContainer className="text-center py-5">
        <h2>Category Not Found</h2>
      </MDBContainer>
    );
  }

  // Function to navigate to Prompt Creator Page
  const handleServiceClick = (serviceName) => {
    navigate(
      `/prompt-creator/${categoryId}/${serviceName.replace(/\s+/g, "-")}`,
    );
  };

  return (
    <div className="category-page-section">
      {/* Category Header with gradient styling similar to hero section */}
      <div className="category-hero-section">
        <div className="hero-decoration">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="category-header category-container">
          <MDBCardTitle className="category-title">
            {category.name}
          </MDBCardTitle>
          <p className="category-description">{category.description}</p>
        </div>
      </div>

      <div className="category-content">
        {/* Handle Nested Structure for Content Writing Category */}
        {category.id === "content-writing" ? (
          <div className="subcategories-wrapper">
            {Object.entries(category.services).map(
              ([subcategory, services], idx) => (
                <div key={idx} className="subcategory-container">
                  <h3 className="subcategory-title">{subcategory}</h3>
                  <div className="service-bar-list">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="service-bar"
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="service-bar-icon">
                          <span>{service.charAt(0)}</span>
                        </div>
                        <div className="service-bar-name">{service}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        ) : (
          /* Default Grid for Other Categories */
          <div className="services-section">
            <div className="service-bar-list">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="service-bar"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="service-bar-icon">
                    <span>{service.charAt(0)}</span>
                  </div>
                  <div className="service-bar-name">{service}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
