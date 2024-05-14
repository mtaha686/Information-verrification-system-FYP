import React from "react";

const SelectField = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {/* <p className="message-of-input">for error</p> */}
  </div>
);

export default SelectField;
