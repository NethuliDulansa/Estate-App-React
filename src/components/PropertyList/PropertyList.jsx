/*import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyList = ({
  properties, // List of properties to display
  toggleFavorite, // Function to toggle favorite status
  favorites,// List of favorite properties
  isFavoritesPage, // Boolean to determine if this is the favorites page
  onDropToFavorite, // Function to handle drag-and-drop for adding favorites
  onRemoveFromFavorite,  // Function to handle drag-and-drop for removing favorites
  clearFavorites, // Function to clear all favorites
}) => {
  const handleDragOver = (e) => e.preventDefault();

  return (


    <div className="container mt-3">
        {/* Show 'Clear All' button only on the favorites page }
         {isFavoritesPage && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-danger px-3 py-2"
            onClick={clearFavorites}
            style={{ fontSize: "1rem", borderRadius: "25px", fontWeight: "500" }}
          >
           
            Clear All
          </button>
        </div>
      )}
     {/* Render properties as cards }
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4 mb-4" key={property.id} style={{ position: "relative" }}>
             {/* Add a delete button on the favorites page}
            {isFavoritesPage && (
              <button
                className="btn btn-danger"
                onClick={() => toggleFavorite(property)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "-20px",
                  zIndex: 10,
                }}
              >
                <i className="bi bi-trash"></i>
              </button>
            )}
            {/* Property Card Component }
            <PropertyCard
              property={property}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites?.some((fav) => fav.id === property.id)}
            />
          </div>
        ))}
      </div>
   {/* Drag-and-drop functionality for adding to favorites (not on the favorites page) }
      {!isFavoritesPage && (


        <div
          className="d-flex flex-column align-items-center justify-content-center my-9 py-5"
          onDragOver={handleDragOver}
          onDrop={onDropToFavorite}
        >
          <i className="bi bi-arrow-down-circle-fill text-success fs-3 mb-3"></i>
          <h5 className="text-muted text-center">
            Drag properties here to add to favorites
          </h5>
        </div>
      )}


{/* Drag-and-drop functionality for removing from favorites (only on the favorites page) }
      {isFavoritesPage && (
        <>
          <div
            className="d-flex flex-column align-items-center justify-content-center my-9 py-5"
            onDragOver={handleDragOver}
            onDrop={onRemoveFromFavorite}
          >
            <i className="bi bi-arrow-down-circle-fill text-danger fs-3 mb-3"></i>
            <h5 className="text-muted text-center">
              Drag properties here to remove from favorites
            </h5>
          </div>
         
         
        </>
      )}
    </div>
  );
};

export default PropertyList; */
import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyList = ({
  properties, // List of properties to display
  toggleFavorite, // Function to toggle favorite status
  favorites, // List of favorite properties
  isFavoritesPage, // Boolean to determine if this is the favorites page
  clearFavorites, // Function to clear all favorites
}) => {
  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="container mt-3">
      {/* Show 'Clear All' button only on the favorites page */}
      {isFavoritesPage && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-danger px-3 py-2"
            onClick={clearFavorites}
            style={{ fontSize: "1rem", borderRadius: "25px", fontWeight: "500" }}
          >
            Clear All
          </button>
        </div>
      )}
      {/* Render properties as cards */}
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4 mb-4" key={property.id} style={{ position: "relative" }}>
            {/* Add a delete button on the favorites page */}
            {isFavoritesPage && (
              <button
                className="btn btn-danger"
                onClick={() => toggleFavorite(property)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "-20px",
                  zIndex: 10,
                }}
              >
                <i className="bi bi-trash"></i>
              </button>
            )}
            {/* Property Card Component */}
            <PropertyCard
              property={property}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites?.some((fav) => fav.id === property.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;