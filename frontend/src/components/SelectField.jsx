import React from "react";

const SelectField = ({
  data,
  label,
  id,
  name,
  value,
  onChange,
  options,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={id}>
      {label}
      {data === false && (
        <p className="comparison-message"> {data} not matched</p>
      )}
    </label>
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
    </select>{" "}
  </div>
);

export default SelectField;
