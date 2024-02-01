import React from "react";
import "../styles/style.css";

const Input = ({ label, type, placeholder, data, setData }) => {
  return (
    <div>
      <label className="label1">{label}</label>
      <br />
      <input className="input"
        type={type}
        placeholder={placeholder}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default Input;
