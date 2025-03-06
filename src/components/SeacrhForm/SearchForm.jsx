
import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  // State to store the criteria for the search
  const [criteria, setCriteria] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
    dateAdded: "",
  });
  // Handle input changes and update the corresponding criteria
  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };
  // Handle form submission and pass the search criteria to the parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <div className="banner position-relative text-white">
      <div className="overlay"></div>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="mb-4">Find Your Dream Home</h1>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="search-form d-flex flex-wrap justify-content-center align-items-center p-3"
        >
          <select
            name="type"
            value={criteria.type}
            onChange={handleChange}
            className="custom-select"
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>

          <div className="container">
            <div className="row mb-3">
              {/* Min Price */ }
              <div className="col-md-6">
                <label className="form-label">Min Price:</label>
                <input
                  type="number"
                  name="minPrice"
                  value={criteria.minPrice}
                  onChange={handleChange}
                  placeholder="eg :3000"
                  className="form-control"
                />
              </div>

              {/* Max Price */}
              <div className="col-md-6">
                <label className="form-label">Max Price:</label>
                <input
                  type="number"
                  name="maxPrice"
                  value={criteria.maxPrice}
                  onChange={handleChange}
                  placeholder="eg: 9000"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              {/* Min Bedrooms*/ }
              <div className="col-md-6">
                <label className="form-label">Min Bedrooms:</label>
                <input
                  type="number"
                  name="minBedrooms"
                  value={criteria.minBedrooms}
                  onChange={handleChange}
                  placeholder="eg: 3"
                  className="form-control"
                />
              </div>

              {/* Max Bedrooms*/ }
              <div className="col-md-6">
                <label className="form-label">Max Bedrooms:</label>
                <input
                  type="number"
                  name="maxBedrooms"
                  value={criteria.maxBedrooms}
                  onChange={handleChange}
                  placeholder="eg: 8"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              {/* Postcode */}
              <div className="col-md-6">
                <label className="form-label">Postcode:</label>
                <input
                  type="text"
                  name="postcode"
                  value={criteria.postcode}
                  onChange={handleChange}
                  placeholder="eg: NW1"
                  className="form-control"
                />
              </div>

              {/* Date Added */}
              <div className="col-md-6">
                <label className="form-label">Date Added (After):</label>
                <input
                  type="date"
                  name="dateAdded"
                  value={criteria.dateAdded}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          {/* Button for search */}
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm; 
