import React from "react";
import "../assets/CSS/styles.css";
const InputField = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  pattern,
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
      pattern={pattern}
      onChange={onChange}
      required={required}
    />
    {/* <p className="message-of-input">for error</p> */}
  </div>
);

export default InputField;
