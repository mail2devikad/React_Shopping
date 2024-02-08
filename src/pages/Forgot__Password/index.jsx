import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "../Forgot__Password/styles/style.css";
import Validation from "../../utils/validators/Validation";

const Forgotpassword = () => {
  const [values, setValues] = useState({
    phone: "",
    otp: "",
    password: "",
    confirmpassword: "",
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
  return (
    <div className=" password-body">
      <div className="password-box">
        <div className="password-card">
          <div>
            <div className="text-xl font-bold text-center pb-2">
              Welcome back !
            </div>
            <p className=" paragraph">
              Where Every Bite Tells a Story, and Every
            </p>
            <p className=" paragraph">
              Moment Feels Like Home!
            </p>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Mobile"
              values={values}
              setValues={setValues}
              field="phone"
              onChange={handleInput}
            />
            {error.phone && <p className="error">{error.phone}</p>}
            <div
              className="bg-[#3E56A2] border-[#1B3A9C] text-white rounded-md border-2 text-center
             mt-3 lg:ml-[300px] md:ml-[220px] ml-[170px] lg:h-[40px] lg:w-[80px] h-[40px] w-[80px]  pt-2 lg:text-base text-sm"
            >
              <Button label="Get OTP" onClick={handleValidation} />
            </div>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter OTP"
              values={values}
              setValues={setValues}
              field="otp"
              onChange={handleInput}
            />
            {error.otp && <p className="error">{error.otp}</p>}
            <Input
              type="text"
              placeholder="Reset Password"
              values={values}
              setValues={setValues}
              field="password"
              onChange={handleInput}
            />
            {error.password && <p className="error">{error.password}</p>}
            <Input
              type="text"
              placeholder="Confirm Password"
              values={values}
              setValues={setValues}
              field="confirmpassword"
              onChange={handleInput}
            />
            {error.confirmpassword && (
              <p className="error">{error.confirmpassword}</p>
            )}
            <div
              className="bg-[#3E56A2] border-[#1B3A9C] text-white rounded-full border-2 text-center 
               mt-5 lg:h-[50px] lg:w-[380px] md:h-[40px] md:w-[300px]  h-[40px] w-[250px] lg:pt-4 md:pt-2 pt-2"
            >
              <Button label="Reset Password" onClick={handleValidation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
