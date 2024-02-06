import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "../Login__Page/styles/style.css";
import { Link, Navigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import Validation from "../../utils/validators/Validation";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});

  const handleInput = (e) => {
    const newValue = { ...values, [e.target.name]: e.target.value };
    setValues(newValue);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setError(Validation(values));
  };

  const PasswordVisibile = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="background">
      <div className="card">
        <div className="close">
          <IoCloseCircleOutline className="close-icon" />
        </div>
        <div className="card1">
          <div>
            <div className="login_head">Welcome back !</div>
            <p className="p_login">Where Every Bite Tells a Story, and Every</p>
            <p className="p_login">Moment Feels Like Home!</p>
          </div>
          <div className="align mt-5">
            <Input
              label="Email ID/Mobile Number"
              type="text"
              placeholder="Enter your email-id"
              values={values}
              setValues={setValues}
              field="email"
              onChange={handleInput}
            />
            {error.email && <p className="error">{error.email}</p>}
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
              <PiEyeBold className="absolute-eye" onClick={PasswordVisibile} />
            ) : (
              <PiEyeClosedBold
                className="absolute-eye"
                onClick={PasswordVisibile}
              />
            )}
          </div>
          <div className="link1">
            <Link to="/forgotpassword">Forgot Password ?</Link>
          </div>
          <div
            className="bg-[#3E56A2] border-[#1B3A9C] text-white rounded-full border-2 text-center lg:font-bold lg:text-2xl
               font-semibold text-xl mt-5 lg:h-[70px] lg:w-[380px] md:h-[60px] md:w-[300px]  h-[50px] w-[250px] lg:pt-4 md:pt-3 pt-2"
          >
            <Button label="Login" onClick={handleValidation} />
          </div>
          <div className="text-center mt-2">
            Not a User ?
            <Link to="/signup" className="link2">
              Sign Up Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
