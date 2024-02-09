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
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      await fetchData({
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      });
      setLoading(false);
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
            <Button label="Sign Up" onClick={handleSignup} disabled={loading} />
          </div>
          {loading && (
            <div className="text-center mt-2">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-400 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="text-slate-500">Loading...</span>
              </div>
            </div>
          )}
          <div className="link">
            <Link to="/login">Already Registered ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
