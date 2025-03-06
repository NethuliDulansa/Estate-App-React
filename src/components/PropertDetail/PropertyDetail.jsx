
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import properties from "../../data/properties.json";
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams(); // Extract the property ID from the URL parameters
  const property = properties.find((prop) => prop.id === Number(id)); // Find the property that matches the ID

  const [selectedImage, setSelectedImage] = useState(null); // State to track the currently selected image for modal display



  // Handle when an image is clicked to enlarge it
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  // Handle modal close action
  const handleClose = () => {
    setSelectedImage(null);
  };

  if (!property) {
    return <p>Property not found!</p>;// Display a message if the property doesn't exist

  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{property.shortDescription}</h2>

      {/* Tabs Section */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Google Map</Tab>
        </TabList>

        {/* Long Description */}
        <TabPanel>
          <div>
            <p>{property.longDescription}</p>
            {property.keyFeatures && property.keyFeatures.length > 0 && (
              <div>
                {/*Key Features*/}
                <h4>Key Features:</h4>
                <ul>
                  {property.keyFeatures.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </TabPanel>

        {/* Floor Plan */}
        <TabPanel>
          {property.floorPlan ? (
            <img
              src={property.floorPlan}
              alt="Floor Plan"
              className="img-fluid rounded"
              style={{ width: "100%" }}
            />
          ) : (
            <p>No floor plan available</p>
          )}
        </TabPanel>

        {/* Google Map */}
        <TabPanel>
          <iframe
            title="Property Location"
            src={`https://maps.google.com/maps?q=${property.postcode}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </TabPanel>
      </Tabs>

      {/* Image Section */}
      <div className="mb-4">
        <div className="row">
          {/* Large Main Image */}
          <div className="col-md-6">
            <img
              src={property.images[0]}
              alt="Main Property"
              className="img-fluid rounded mb-2"
              style={{ objectFit: "cover", height: "700px", width: "500px" }}
              onClick={() => handleImageClick(property.images[0])}
            />
          </div>

          {/* Smaller Images */}
          <div className="col-md-6">
            <div className="row">
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="col-6 mb-2">
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="img-fluid rounded"
                    style={{ objectFit: "cover", height: "190px", width: "600px" }}
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for Image Preview */}
      {selectedImage && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClose} // Close the modal when background is clicked
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <div className="modal-content">
              <div className="modal-body p-0" style={{ backgroundColor: 'white' }}> {/* White background for the image container */}
                <div
                  style={{
                    backgroundColor: 'white',  // White background for the image itself
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    maxHeight: '80vh',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={selectedImage}
                    alt="Selected Property"
                    className="img-fluid rounded-0" // Removes any default border-radius
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Ensure image is responsive
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default PropertyDetail;
