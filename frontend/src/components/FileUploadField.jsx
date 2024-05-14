import React, { useState } from "react";

const FileUploadField = ({ label, id, name, accept, onChange }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (file && !acceptedImageTypes.includes(file.type)) {
      setErrorMessage("Only JPEG, PNG, and JPG files are allowed.");
      // Clear the file input to allow the user to select a valid file
      event.target.value = null;
    } else {
      setErrorMessage("");
      // Call the parent component's onChange function to handle the file change
      if (onChange) {
        onChange(event);
      }
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
        {errorMessage && <p className="comparison-message">{errorMessage}</p>}
      </label>
      <div className="custom-file">
        <input
          type="file"
          accept={accept}
          className="custom-file-input"
          id={id}
          name={name}
          required
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUploadField;
