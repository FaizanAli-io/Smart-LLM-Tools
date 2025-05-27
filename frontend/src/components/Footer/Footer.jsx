import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../../assets/categories";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  
  // Function to format service name into URL-friendly format
  const formatServiceSlug = (service) => service.replace(/\s+/g, "-");
  
  // Function to handle link clicks and scroll to top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <MDBFooter className="footer">
      <MDBContainer className="footer-content">
        <div className="footer-columns">
          {categories.map((category) => (
            <div key={category.id} className="footer-section">
              <h6 className="footer-title">{category.name}</h6>
              <ul className="footer-list">
                {Array.isArray(category.services) ? (
                  category.services.length > 0 ? (
                    category.services.map((service, index) => (
                      <li key={index}>
                        <Link
                          to={`/prompt-creator/${category.id}/${formatServiceSlug(service)}`}
                          className="footer-link"
                          onClick={handleLinkClick}
                        >
                          {service}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="footer-no-services">No services available</li>
                  )
                ) : (
                  Object.entries(category.services).map(([subCategory, subServices], idx) => (
                    <div key={idx}>
                      <h6 className="footer-subcategory">{subCategory}</h6>
                      <ul className="footer-sublist">
                        {subServices.map((service, i) => (
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
                      </ul>
                    </div>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
      </MDBContainer>
      {/* Copyright Section */}
      <div className="footer-bottom">
        © 2025 Your Company. All rights reserved.
      </div>
    </MDBFooter>
  );
}