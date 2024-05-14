import React from "react";

import "../assets/CSS/styles.css"; // Make sure to import your CSS file

const Home = () => {
  return (
    <div className="intro-section">
      <div className="text-intro intro">
        <h1>
          Document <br />
          Verification <br />
          System
        </h1>
        <p>Verify Your Documents</p>
        <div type="button" className="btn">
          Sign Up Now
        </div>
      </div>
      <div className="img-intro intro"></div>
    </div>
  );
};

export default Home;
