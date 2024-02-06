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
  };
  // if (Object.keys(error).length === 0) {
  //   alert("Validation successful! Logging in...");
  // }

  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="back">
      <div className="main-box">
        <div className="box">
          <div className="heading">Welcome</div>
          <div className="mt-5">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              values={values}
              setValues={setValues}
              field="name"
              onChange={handleInput}
            />
            {error.name && <p className="error">{error.name}</p>}
          </div>
          <div className="mt-5">
            <Input
              label="Email Id"
              type="text"
              placeholder="Enter your email-id"
              values={values}
              setValues={setValues}
              field="email"
              onChange={handleInput}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>
          <div className="mt-5">
            <Input
              label="Phone Number"
              type="number"
              placeholder="Enter number"
              values={values}
              setValues={setValues}
              field="phone"
              onChange={handleInput}
            />
            {error.phone && <p className="error">{error.phone}</p>}
          </div>
          <div className="relative-container mt-5">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              values={values}
              setValues={setValues}
              field="password"
              onChange={handleInput}
            />
            {error.password && <p className="error">{error.password}</p>}
            {showPassword ? (
              <PiEyeBold className="absolute-eye" onClick={PasswordVisible} />
            ) : (
              <PiEyeClosedBold
                className="absolute-eye"
                onClick={PasswordVisible}
              />
            )}
          </div>
          <div className="relative-container mt-5">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="*********"
              values={values}
              setValues={setValues}
              field="confirmpass"
              onChange={handleInput}
            />
            {error.confirmpass && <p className="error">{error.confirmpass}</p>}
          </div>
          <div
            className="bg-[#3E56A2] border-[#1B3A9C] text-white rounded-full border-2 text-center lg:font-bold lg:text-2xl
               font-semibold text-xl mt-5 lg:h-[70px] lg:w-[380px] md:h-[60px] md:w-[300px]  h-[50px] w-[250px] lg:pt-4 md:pt-3 pt-2"
          >
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
