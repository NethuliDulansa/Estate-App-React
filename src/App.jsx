/*
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import SearchForm from "./components/SeacrhForm/SearchForm";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertyDetail from "./components/PropertDetail/PropertyDetail";
import properties from "./data/properties.json";
import Navbar from "./components/Header/NavBar";
import FeatureCards from "./components/FeatureCard/FeatureCard";
import AboutUs from "./components/AboutPage/AboutUs";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {

  // State to hold search results and favorite properties
  const [results, setResults] = useState(properties);
  const [favorites, setFavorites] = useState([]);

  // Filters properties based on search criteria
  const handleSearch = (criteria) => {
    const filtered = properties.filter((property) => {
      const matchesType = criteria.type === "" || property.type === criteria.type;
      const matchesMinPrice =
        criteria.minPrice === "" || property.price >= Number(criteria.minPrice);
      const matchesMaxPrice =
        criteria.maxPrice === "" || property.price <= Number(criteria.maxPrice);
      const matchesMinBedrooms =
        criteria.minBedrooms === "" ||
        property.bedrooms >= Number(criteria.minBedrooms);
      const matchesMaxBedrooms =
        criteria.maxBedrooms === "" ||
        property.bedrooms <= Number(criteria.maxBedrooms);
      const matchesPostcode =
        criteria.postcode === "" || property.postcode.startsWith(criteria.postcode);
      const matchesDateAdded =
        criteria.dateAdded === "" ||
        new Date(property.dateAdded) >= new Date(criteria.dateAdded);

      return (
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesPostcode &&
        matchesDateAdded
      );
    });
    //If the search results are none
    if (filtered.length === 0) {
      alert("No properties found matching your criteria");
    }

    setResults(filtered);

    // Scroll to the results section
    document.getElementById("searchResults").scrollIntoView({
      behavior: "smooth",
    });
  };

  // Toggles a property as a favorite
  const toggleFavorite = (property) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === property.id)) {
        return prevFavorites.filter((fav) => fav.id !== property.id);
      } else {
        return [...prevFavorites, property];
      }
    });
  };

  // Handles drag-and-drop to add a property to favorites
  const onDropToFavorite = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");
    const property = results.find((prop) => prop.id === Number(propertyId));
    if (property && !favorites.some((fav) => fav.id === property.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, property]);
    }
  };

  // Allows dragging over a target
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Clears all favorite properties
  const clearFavorites = () => {
    setFavorites([]);
  };

  // Handles drag-and-drop to remove a property from favorites
  const onDropToRemove = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== Number(propertyId))
    );
  };

  // Conditionally renders the SearchForm component
  const SearchFormWrapper = () => {
    const location = useLocation();
    if (location.pathname === "/about") return null; // Don't render on "/about"
    return <SearchForm onSearch={handleSearch} />;
  };

  return (
    <Router>
      <div>
        <Navbar favoritesCount={favorites.length} />
        <SearchFormWrapper />
        <Routes>
          {/* Route to view property details}
          <Route path="/property/:id" element={<PropertyDetail />} />
          {/* Route to view and manage favorite properties}
          <Route
            path="/my-list"
            element={
              <div
                className="d-flex flex-column align-items-center justify-content-center my-5 py-5"
                onDragOver={allowDrop}
                onDrop={onDropToRemove}
              >
                <i className="bi bi-arrow-down-circle-fill text-danger fs-3 mb-3"></i>
                <h5 className="text-muted text-center">
                  Drag properties here to remove from favorites
                </h5>
                <PropertyList
                  clearFavorites={clearFavorites}
                  properties={favorites}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                  isFavoritesPage={true}
                />
              </div>
            }
          />
          {/* Route for the home page with search results and feature cards}
          <Route
            path="/"
            element={
              <div>
                <FeatureCards />
                <div
                  className="d-flex flex-column align-items-center justify-content-center my-9 py-5"
                  onDragOver={allowDrop}
                  onDrop={onDropToFavorite}
                >
                  <i className="bi bi-arrow-down-circle-fill text-success fs-3 mb-3"></i>
                  <h5 className="text-muted text-center">
                    Drag properties here to add to favorites
                  </h5>
                  {/* Results section, with an anchor point}
                  <div id="searchResults"></div>
                  <PropertyList
                    properties={results}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                  />

                </div>
              </div>
            }
          />
          {/* Route to the About Us page }
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 
*/
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import SearchForm from "./components/SeacrhForm/SearchForm";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertyDetail from "./components/PropertDetail/PropertyDetail";
import properties from "./data/properties.json";
import Navbar from "./components/Header/NavBar";
import FeatureCards from "./components/FeatureCard/FeatureCard";
import AboutUs from "./components/AboutPage/AboutUs";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {
  // State to hold search results and favorite properties
  const [results, setResults] = useState(properties);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("Loaded favorites from localStorage:", savedFavorites); // Debugging
    if (savedFavorites.length > 0) {
      setFavorites(savedFavorites);
    }
  }, []);

  // Save favorites to local storage whenever they change
  useEffect(() => {
    console.log("Saving favorites to localStorage:", favorites); // Debugging
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Filters properties based on search criteria
  const handleSearch = (criteria) => {
    const filtered = properties.filter((property) => {
      const matchesType = criteria.type === "" || property.type === criteria.type;
      const matchesMinPrice =
        criteria.minPrice === "" || property.price >= Number(criteria.minPrice);
      const matchesMaxPrice =
        criteria.maxPrice === "" || property.price <= Number(criteria.maxPrice);
      const matchesMinBedrooms =
        criteria.minBedrooms === "" ||
        property.bedrooms >= Number(criteria.minBedrooms);
      const matchesMaxBedrooms =
        criteria.maxBedrooms === "" ||
        property.bedrooms <= Number(criteria.maxBedrooms);
      const matchesPostcode =
        criteria.postcode === "" || property.postcode.startsWith(criteria.postcode);
      const matchesDateAdded =
        criteria.dateAdded === "" ||
        new Date(property.dateAdded) >= new Date(criteria.dateAdded);

      return (
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesPostcode &&
        matchesDateAdded
      );
    });

    // If the search results are none
    if (filtered.length === 0) {
      alert("No properties found matching your criteria");
    }

    setResults(filtered);

    // Scroll to the results section
    document.getElementById("searchResults").scrollIntoView({
      behavior: "smooth",
    });
  };

  // Toggles a property as a favorite
  const toggleFavorite = (property) => {
    console.log("Toggling favorite:", property); // Debugging
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === property.id)) {
        return prevFavorites.filter((fav) => fav.id !== property.id);
      } else {
        return [...prevFavorites, property];
      }
    });
  };

  // Handles drag-and-drop to add a property to favorites
  const onDropToFavorite = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");
    const property = results.find((prop) => prop.id === Number(propertyId));
    if (property && !favorites.some((fav) => fav.id === property.id)) {
      console.log("Adding to favorites via drag-and-drop:", property); // Debugging
      setFavorites((prevFavorites) => [...prevFavorites, property]);
    }
  };

  // Allows dragging over a target
  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Clears all favorite properties
  const clearFavorites = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all favorites?");
    if (confirmClear) {
      console.log("Clearing all favorites"); // Debugging
      setFavorites([]);
    }
  };

  // Handles drag-and-drop to remove a property from favorites
  const onDropToRemove = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData("propertyId");
    console.log("Removing from favorites via drag-and-drop:", propertyId); // Debugging
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== Number(propertyId))
    );
  };

  // Conditionally renders the SearchForm component
  const SearchFormWrapper = () => {
    const location = useLocation();
    if (location.pathname === "/about") return null; // Don't render on "/about"
    return <SearchForm onSearch={handleSearch} />;
  };

  return (
    <Router>
      <div>
        <Navbar favoritesCount={favorites.length} />
        <SearchFormWrapper />
        <Routes>
          {/* Route to view property details */}
          <Route path="/property/:id" element={<PropertyDetail />} />
          {/* Route to view and manage favorite properties */}
          <Route
            path="/my-list"
            element={
              <div
                className="d-flex flex-column align-items-center justify-content-center my-5 py-5"
                onDragOver={allowDrop}
                onDrop={onDropToRemove}
              >
                <i className="bi bi-arrow-down-circle-fill text-danger fs-3 mb-3"></i>
                <h5 className="text-muted text-center">
                  Drag properties here to remove from favorites
                </h5>
                <PropertyList
                  clearFavorites={clearFavorites}
                  properties={favorites}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                  isFavoritesPage={true}
                />
              </div>
            }
          />
          {/* Route for the home page with search results and feature cards */}
          <Route
            path="/"
            element={
              <div>
                <FeatureCards />
                <div
                  className="d-flex flex-column align-items-center justify-content-center my-9 py-5"
                  onDragOver={allowDrop}
                  onDrop={onDropToFavorite}
                >
                  <i className="bi bi-arrow-down-circle-fill text-success fs-3 mb-3"></i>
                  <h5 className="text-muted text-center">
                    Drag properties here to add to favorites
                  </h5>
                  {/* Results section, with an anchor point */}
                  <div id="searchResults"></div>
                  <PropertyList
                    properties={results}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                  />
                </div>
              </div>
            }
          />
          {/* Route to the About Us page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;