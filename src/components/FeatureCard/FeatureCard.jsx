import React from "react";
import "./FeatureCards.css";

// Array containing feature data
const features = [
  { icon: "🏠", title: "House & Villa", count: "155 Properties" },
  { icon: "🏢", title: "Apartment", count: "300 Properties" },
  { icon: "🏬", title: "Office & Studio", count: "80 Properties" },
  { icon: "🏛️", title: "Villa & Condo", count: "80 Properties" },
];


const FeatureCards = () => {
  return (
    <div className="feature-cards-container">
        {/* Section title */}
      <h2 className="text-center">Featured Property Types</h2>
      <p className="text-center">Find All Type of Property</p>
        {/* Dynamic rendering of feature cards */}
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
