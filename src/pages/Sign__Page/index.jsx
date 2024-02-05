import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import "../Sign__Page/styles/style.css";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import Validation from "../../utils/validators/Validation";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpass: "",
  });

  const [error, setError] = useState({});

  const handleInput = (e) => {
    const newValue = { ...values, [e.target.name]: e.target.value };
    setValues(newValue);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setError(Validation(values));

    // if (Object.keys(error).length === 0) {
    //   alert("Validation successful! Logging in...");
    // }
  };

  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="back">
      <div className="main-box">
        <div className="box">
          <div className="heading">Welcome</div>
          <div>
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              values={values}
              setValues={setValues}
              field="name"
              onChange={handleInput}
            />
            {error.name && <p className="text-red-500 text-xs">{error.name}</p>}
          </div>
          <div>
            <Input
              label="Email Id"
              type="text"
              placeholder="Enter your email-id"
              values={values}
              setValues={setValues}
              field="email"
              onChange={handleInput}
            />
            {error.email && (
              <p className="text-red-500 text-xs">{error.email}</p>
            )}
          </div>
          <div>
            <Input
              label="Phone Number"
              type="number"
              placeholder="Enter number"
              values={values}
              setValues={setValues}
              field="phone"
              onChange={handleInput}
            />
            {error.phone && (
              <p className="text-red-500 text-xs">{error.phone}</p>
            )}
          </div>
          <div className="relative-container">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              values={values}
              setValues={setValues}
              field="password"
              onChange={handleInput}
            />
            {error.password && (
              <p className="text-red-500 text-xs">{error.password}</p>
            )}
            {showPassword ? (
              <PiEyeBold
                className="absolute-eye"
                onClick={PasswordVisible}
              />
            ) : (
              <PiEyeClosedBold
                className="absolute-eye"
                onClick={PasswordVisible}
              />
            )}
          </div>
          <div className="relative-container">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="*********"
              values={values}
              setValues={setValues}
              field="confirmpass"
              onChange={handleInput}
            />
            {error.confirmpass && (
              <p className="text-red-500 text-xs">{error.confirmpass}</p>
            )}
          </div>
          <div>
            <Button label="Sign Up" onClick={handleValidation} />
          </div>
          <div className="link">
            <Link to="/login">Already Registered ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
