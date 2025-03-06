
import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

//Format the date of each property added
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
};

const PropertyCard = ({ property, toggleFavorite, isFavorite }) => {
  return (
    <div
      className="property-card card h-100"
      draggable // Makes the property card draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("propertyId", property.id); // Pass property ID
      }}
    >
      {/* Link to the property details page */}
      <Link to={`/property/${property.id}`}>
        <img
          src={property.images[0]}
          className="property-image card-img-top"
          alt={property.type}
        />
      </Link>
      <div className="property-body card-body">
        <h5 className="property-label">For Rent</h5>
        {/*Property short description */}
        <h5 className="property-title card-title">{property.shortDescription}</h5>
        {/*Property bedroom count*/}
        <p className="property-bedrooms">
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        {/*Property location*/}
        <p className="property-location">
          <i
            className="bi bi-geo-alt"
            style={{ color: "#908684", marginRight: "5px" }}
          ></i>
          {property.postcode}
        </p>
        {/*Property price*/}
        <p className="property-price">
          <span className="price-label"></span> £{property.price}{" "}

        </p>

        {/* Heart icon for favorites */}
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag interference
            toggleFavorite(property);
          }}
          style={{
            color: isFavorite ? "red" : "gray",
            fontSize: "1rem",
            border: "none",
            background: "transparent",
          }}
        >
          <i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
        </button>
        {/*Property Added date */}
        <p> <span className="added-date">Added: {formatDate(property.dateAdded)}</span> </p>

      </div>
    </div>
  );
};

export default PropertyCard;






