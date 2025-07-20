import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../assets/categories";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
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

  const formatServiceSlug = (service) => service.replace(/\s+/g, "-");
  const handleLinkClick = () => window.scrollTo(0, 0);

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

  const renderServices = (category) => {
    if (!Array.isArray(category.services)) {
      return Object.entries(category.services).map(([subCategory, subServices], idx) => (
        <div key={idx} className="service-subsection">
          <h6 className="footer-subcategory">{subCategory}</h6>
          <ul className="footer-sublist">
            {subServices.slice(0, 8).map((service, i) => (
              <li key={i}>
                <Link
                  to={`/prompt-creator/${category.id}/${formatServiceSlug(service)}`}
                  className="footer-link"
                  onClick={handleLinkClick}
                >
                  {service}
                </Link>
              </li>
            ))}
            {subServices.length > 8 && (
              <li className="more-services">
                <Link
                  to={`/category/${category.id}`}
                  className="footer-link view-all-link"
                  onClick={handleLinkClick}
                >
                  +{subServices.length - 8} more services
                </Link>
              </li>
            )}
          </ul>
        </div>
      ));
    }
    
    const servicesToShow = category.services.slice(0, 10);
    const remainingCount = category.services.length - 10;
    
    return servicesToShow.length > 0 ? (
      <>
        {servicesToShow.map((service, index) => (
          <li key={index}>
            <Link
              to={`/prompt-creator/${category.id}/${formatServiceSlug(service)}`}
              className="footer-link"
              onClick={handleLinkClick}
            >
              {service}
            </Link>
          </li>
        ))}
        {remainingCount > 0 && (
          <li className="more-services">
            <Link
              to={`/category/${category.id}`}
              className="footer-link view-all-link"
              onClick={handleLinkClick}
            >
              +{remainingCount} more services
            </Link>
          </li>
        )}
      </>
    ) : (
      <li className="footer-no-services">No services available</li>
    );
  };

  if (loading) {
    return (
      <MDBFooter className="footer">
        <MDBContainer className="footer-content">
          <div className="footer-loading">
            <div className="loading-spinner"></div>
            <span>Loading available services...</span>
          </div>
        </MDBContainer>
        <div className="footer-bottom">
          Copyright© 2025 Local Business Services Ltd. All Rights Reserved. | Privacy Policy
        </div>
      </MDBFooter>
    );
  }

  return (
    <MDBFooter className="footer">
      <MDBContainer className="footer-content">
        <div className={`footer-columns footer-columns-${Math.min(filteredCategories.length, 4)}`}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id} className="footer-section">
                <div className="footer-title-wrapper">
                  <h6 className="footer-title">{category.name}</h6>
                  
                </div>
                <ul className="footer-list">
                  {renderServices(category)}
                </ul>
              </div>
            ))
          ) : (
            <div className="footer-no-access">
              <div className="no-access-icon">🔒</div>
              <h6>No Categories Available</h6>
              <p>Please contact your administrator for access to AI tools and services.</p>
            </div>
          )}
        </div>
      </MDBContainer>
     
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <span>Copyright© 2025 Local Business Services Ltd. All Rights Reserved.</span>
          <span className="footer-divider">|</span>
          <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
        </div>
      </div>
    </MDBFooter>
  );
}