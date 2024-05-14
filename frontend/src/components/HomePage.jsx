// HomePage.jsx

import React from "react";

import "../assets/CSS/styles.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="intro-section intro">
        <h1>Information Verification System</h1>
        <p>
          Your form filled data will be verifed through the documents you have
          uploaded in a while
        </p>
        <div type="button" class="btn">
          proceed
        </div>
      </div>
    </div>
  );
};

export default HomePage;
