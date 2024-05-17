import React from "react";
import "../assets/CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SubmitButton = ({ isVerified, onClick }) => {
  return (
    <button type="submit" className="buttonSubmit" onClick={onClick}>
      {isVerified ? "Submit" : "Verify"}
    </button>
  );
};

export default SubmitButton;
