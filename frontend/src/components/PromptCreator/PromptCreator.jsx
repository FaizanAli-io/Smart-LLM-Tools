import React from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../../assets/categories";
import "./PromptCreator.css";

export default function PromptCreator() {
  const { categoryId, serviceId } = useParams();

  // Find the correct category
  const category = categories.find((cat) => cat.id === categoryId);
  const categoryName = category ? category.name : "Unknown Category";

  // Convert hyphenated service names back to normal text
  const formattedServiceName = serviceId ? serviceId.replace(/-/g, " ") : "Unknown Service";

  return (
    <div className="prompt-creator-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">AI Tools </Link>
        <div className="separator">/</div>
        <Link to={`/category/${categoryId}`} className="breadcrumb-link"> {categoryName} </Link>
        <div className="separator"> / </div>
        <span className="current-page">{formattedServiceName}</span>
      </div>

      {/* Page Titles */}
      <h1 className="page-title">{formattedServiceName} AI</h1>
      <h2 className="page-subtitle">Craft High-Quality {formattedServiceName} Content with AI</h2>

      {/* Form Section */}
      <div className="form-container">
        <form className="flex flex-col gap-4">
          <div className="relative">
            <textarea
              className="custom-textarea"
              placeholder="Provide the target audience, campaign goals, product/service."
              rows="4"
            ></textarea>
            <div className="char-counter">0</div>
          </div>

          {/* Buttons Section */}
          <div className="buttons-container">
            <button type="submit" className="generate-btn">Generate</button>
            <button type="button" className="language-btn">🇺🇸 English</button>
          </div>
        </form>
      </div>
    </div>
  );
}
