import React from "react";
import "../assets/CSS/styles.css";

const InputField = ({
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
    <label htmlFor={id}>{label}</label>
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
