import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../assets/categories";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  const formatServiceSlug = (service) => service.replace(/\s+/g, "-");
  const handleLinkClick = () => window.scrollTo(0, 0);

  const renderServices = (category) => {
    if (!Array.isArray(category.services)) {
      return Object.entries(category.services).map(([subCategory, subServices], idx) => (
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
      ));
    }

    return category.services.length > 0 ? (
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
    );
  };

  return (
    <MDBFooter className="footer">
      <MDBContainer className="footer-content">
        <div className="footer-columns">
          {categories.map((category) => (
            <div key={category.id} className="footer-section">
              <h6 className="footer-title">{category.name}</h6>
              <ul className="footer-list">
                {renderServices(category)}
              </ul>
            </div>
          ))}
        </div>
      </MDBContainer>
      
      <div className="footer-bottom">
        Copyright© 2025 Local Business Services Ltd. All Rights Reserved. | Privacy Policy
      </div>
    </MDBFooter>
  );
}