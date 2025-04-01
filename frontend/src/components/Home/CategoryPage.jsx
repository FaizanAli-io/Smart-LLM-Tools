import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MDBContainer, MDBCardTitle } from "mdb-react-ui-kit";
import { categories } from "../../assets/categories";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <h2 className="text-center mt-5">Category Not Found</h2>;
  }

  // Function to navigate to Prompt Creator Page
  const handleServiceClick = (serviceName) => {
    navigate(`/prompt-creator/${categoryId}/${serviceName.replace(/\s+/g, "-")}`);
  };

  return (
    <MDBContainer className="category-page py-5">
      {/* Category Heading */}
      <div className="category-header text-center">
        <img src={category.image} alt={category.name} className="category-image" />
        <h2 className="category-title">{category.name}</h2>
        <p className="category-description">{category.description}</p>
      </div>

      {/* Handle Nested Structure for Content Writing Category */}
      {category.id === "content-writing" ? (
        Object.entries(category.services).map(([subcategory, services]) => (
          <div key={subcategory}>
            <h4 className="subcategory-title">{subcategory}</h4>
            <div className="services-list-2">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card-2" 
                  onClick={() => handleServiceClick(service)}
                >
                  <MDBCardTitle className="service-text-2">{service}</MDBCardTitle>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        /* Default Grid for Other Categories */
        <div className="services-list-2">
          {category.services.map((service, index) => (
            <div 
              key={index} 
              className="service-card-2" 
              onClick={() => handleServiceClick(service)}
            >
              <MDBCardTitle className="service-text-2">{service}</MDBCardTitle>
            </div>
          ))}
        </div>
      )}
    </MDBContainer>
  );
}
