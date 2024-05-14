import React from "react";
import "../assets/CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SubmitButton = (props) => {
  return (
    <button type="submit" className="buttonSubmit ">
      {props.isVerified ? "Submit" : "Verify"}
    </button>
  );
};

export default SubmitButton;
