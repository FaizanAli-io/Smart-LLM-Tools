import "./PromptCreator.css";

import { useState } from "react";
import { useAuth } from "../../api/authContext";
import { useParams, Link } from "react-router-dom";
import { generateFromPrompt } from "../../api/gptt";
import { categories } from "../../assets/categories";
import { promptTemplates } from "../../assets/promptTemplates";

export default function PromptCreator() {
  const { user } = useAuth();
  const { categoryId, serviceId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);
  const categoryName = category ? category.name : "Unknown Category";
  const formattedServiceName = serviceId ? serviceId.replace(/-/g, " ") : "";

  // Normalize the service name to match the format in the URL
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

  // Find the service key in the promptTemplates object
  const serviceKey = Object.keys(promptTemplates[categoryId] || {}).find(
    (key) => normalize(key) === normalize(serviceId),
  );

  // Get the template for the selected service
  const template = promptTemplates[categoryId]?.[serviceKey];

  // Initialize state for input fields based on the template inputs
  const [inputs, setInputs] = useState(
    () =>
      template?.inputs?.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}) || {},
  );

  const [output, setOutput] = useState("");

  const handleChange = (e, name) => {
    setInputs({ ...inputs, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!template || !template.prompt) return;

    const generatedPrompt = template.prompt(inputs);
    setOutput("Generating..."); // temporary feedback

    try {
      const res = await generateFromPrompt(generatedPrompt, user.id);
      setOutput(res?.response || "No response received.");
    } catch (err) {
      console.error("Error generating content:", err);
      setOutput("Something went wrong. Try again.");
    }
  };

  if (!template) {
    return (
      <div className="prompt-creator-page">
        <h2 style={{ textAlign: "center", marginTop: "4rem" }}>
          This service does not have a prompt template yet.
        </h2>
      </div>
    );
  }

  return (
    <div className="prompt-creator-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          AI Tools
        </Link>
        <div className="separator">/</div>
        <Link to={`/category/${categoryId}`} className="breadcrumb-link">
          {categoryName}
        </Link>
        <div className="separator">/</div>
        <span className="current-page">{formattedServiceName}</span>
      </div>

      {/* Page Titles */}
      <h1 className="page-title">{formattedServiceName}</h1>
      <h2 className="page-subtitle">
        {template?.description || "Craft AI content for this service."}
      </h2>

      {/* Form Section */}
      <div className="form-container">
        {template ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {template.inputs.map((field, idx) => (
              <div className="relative" key={idx}>
                <label className="input-label">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    className="custom-textarea"
                    placeholder={field.placeholder}
                    rows="4"
                    value={inputs[field.name] || ""}
                    onChange={(e) => handleChange(e, field.name)}
                  />
                ) : (
                  <input
                    className="custom-input"
                    type="text"
                    placeholder={field.placeholder}
                    value={inputs[field.name] || ""}
                    onChange={(e) => handleChange(e, field.name)}
                  />
                )}
              </div>
            ))}
            <div className="buttons-container">
              <button type="submit" className="generate-btn">
                Generate
              </button>
            </div>
          </form>
        ) : (
          <p className="no-template-message">
            This service does not yet have a prompt template.
          </p>
        )}
      </div>

      {/* Generated Output */}
      {output && (
        <div className="output-section">
          <h3 className="output-heading">LLM Response</h3>
          <div className="output-box">
            <pre>{output}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
