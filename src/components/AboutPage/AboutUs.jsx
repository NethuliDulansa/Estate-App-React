import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About RentUP</h1>
        <p className="about-subtitle">Your Trusted Real Estate Partner</p>
        {/*Content of the about page */}
        <p>
          Welcome to RentUP, where we redefine the way people discover and rent properties. With a passion for excellence and years of experience in the real estate industry, our team is committed to helping you find the perfect home, office, or investment property.
        </p>
        <p>
          Our dedicated team of experts is here to guide you through every step of your real estate journey. From selecting the right property to finalizing the rental or purchase agreement, we're with you every step of the way.
        </p>
        {/*Button for more details*/}
        <button className="about-button">Learn More About Our Services</button>
      </div>
      {/*Image of the about page*/}
      <div className="about-image">
        <img src="/images/aboutus.jpg" alt="Our Agency" />
      </div>
    </div>
  );
};

export default AboutUs;
