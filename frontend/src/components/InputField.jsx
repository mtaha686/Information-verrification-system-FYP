import React from "react";
import "../assets/CSS/styles.css";

const InputField = ({
  data,
  label,
  type,
  id,
  name,
  placeholder,
  value,
  pattern, // Add pattern attribute
  onChange,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={id}>
      {label}{" "}
      {data === false && <p className="comparison-message"> not matched</p>}
    </label>
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      pattern={pattern} // Include pattern attribute
      onChange={onChange}
      required={required}
    />
  </div>
);

export default InputField;
