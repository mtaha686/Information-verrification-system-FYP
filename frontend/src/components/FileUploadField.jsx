import React from "react";

const FileUploadField = ({ label, id, name, onChange }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <div className="custom-file">
      <input
        type="file"
        accept=".png, .jpeg, .jpg"
        className="custom-file-input"
        id={id}
        name={name}
        required
        onChange={onChange}
      />
    </div>
  </div>
);

export default FileUploadField;
