import React from "react";
import "../styles/style.css";

const Input = ({ label, type, placeholder, values, setValues, field }) => {
  
  return (
    <div>
      <label className="label1">{label}</label>
      <br/>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={values?.field}
        onChange={(e) => setValues({ ...values, [field]: e.target.value })}
      />
    </div>
  );
};

export default Input;
