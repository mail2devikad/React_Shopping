import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import "../Sign__Page/styles/style.css";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import Validation from "../../utils/validators/Validation";
import routes from "../../constants/routes";
import useFetch from "../../api/hooks/useFetch";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpass: "",
  });

  const [error, setError] = useState({});
  const {
    data,
    fetchData,
    error: fetcherror,
  } = useFetch({ url: "https://portal.umall.in/api/customer/register" });


  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    
    
    if (Object.keys(validationErrors).length === 0) {
      await fetchData({
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      });
      if (data) {
        navigate(routes.signIn());
      }
    } else {
      setError(validationErrors);
    }
  };

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
            />
            {error.confirmpass && <p className="error">{error.confirmpass}</p>}
          </div>
          <div
            className="bg-[#3E56A2] border-[#1B3A9C] text-white rounded-full border-2 text-center lg:font-bold lg:text-2xl
               font-semibold text-xl mt-5 lg:h-[70px] lg:w-[380px] md:h-[60px] md:w-[300px]  h-[50px] w-[250px] lg:pt-4 md:pt-3 pt-2"
          >
            <Button label="Sign Up" onClick={handleSignup} />
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
