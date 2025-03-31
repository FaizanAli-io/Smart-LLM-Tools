import React from "react";
import { useParams } from "react-router-dom";
import { MDBContainer, MDBCardTitle } from "mdb-react-ui-kit";
import { categories } from "../../assets/categories";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <h2 className="text-center mt-5">Category Not Found</h2>;
  }

  return (
    <MDBContainer className="category-page py-5">
      {/* Category Heading */}
      <div className="category-header text-center">
        <img src={category.image} alt={category.name} className="category-image" />
        <h2 className="category-title">{category.name}</h2>
        <p className="category-description">{category.description}</p>
      </div>

      {/* Conditional Rendering for Content Writing Category */}
      {category.id === "content-writing" ? (
        <div className="content-writing-container">
          <h4 className="subcategory-title">Main Website Content</h4>
          <div className="services-list-2">
            {["Home Page", "About Us", "Service Page", "Service Page - Location", "Blog/Article", "FAQ"].map((service, index) => (
              <div key={index} className="service-card-2">
                <MDBCardTitle className="service-text-2">{service}</MDBCardTitle>
              </div>
            ))}
          </div>

          <h4 className="subcategory-title">Social Media Post</h4>
          <div className="services-list-2">
            {["Google My Business", "LinkedIn", "Instagram"].map((service, index) => (
              <div key={index} className="service-card-2">
                <MDBCardTitle className="service-text-2">{service}</MDBCardTitle>
              </div>
            ))}
          </div>

          <h4 className="subcategory-title">Other</h4>
          <div className="services-list-2">
            {["Video Script", "Review Response", "Review Generator", "Privacy & Terms Generator"].map((service, index) => (
              <div key={index} className="service-card-2">
                <MDBCardTitle className="service-text-2">{service}</MDBCardTitle>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Default Grid for Other Categories */
        <div className="services-list-2">
          {category.services.map((service, index) => (
            <div key={index} className="service-card-2">
              <MDBCardTitle className="service-text-2">{service}</MDBCardTitle>
            </div>
          ))}
        </div>
      )}
    </MDBContainer>
  );
}
