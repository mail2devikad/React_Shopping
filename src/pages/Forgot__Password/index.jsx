import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "../Forgot__Password/styles/style.css";
import Validation from "../../utils/validators/Validation";
import useFetch from "../../api/hooks/useFetch";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    otp: "",
    otpExist: false,
    password: "",
    passwordExist: true,
    confirmpassword: "",
    confirmpasswordExist: true,
  });

  const [newValue, setNewValue] = useState({
    phone: "",
    phoneExist: true,
  });
  const [error, setError] = useState({});
  const { fetchData, error: fetcherror } = useFetch({
    url: "https://portal.umall.in/api/check-mobile",
  });

  const { fetchData: confirm, error: confirmError } = useFetch({
    url: "https://portal.umall.in/api/reset-password",
  });

  const handleInput = (e) => {
    const newValue = { ...values, [e.target.name]: e.target.value };
    setValues(newValue);
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    const validationErrors = Validation({ ...values, ...newValue });
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      const newresult = await confirm({
        number: newValue.phone,
        password: values.password,
      });
      setLoading(false);
      if (newresult?.sts == "01") {
        alert(newresult?.msg);
        navigate(routes.signIn());
      } else {
        alert(newresult?.msg);
      }
    } else {
      setError(validationErrors);
    }
  };

  const handleValidation = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(newValue);
    if (Object.keys(validationErrors).length === 0) {
      // setLoading(true);
      const newresult = await fetchData({
        number: newValue.phone,
      });
      // setLoading(false);
      if (newresult?.sts == "01") {
        alert(`Use this otp ${newresult?.otp} to reset password`);
      } else {
        alert(newresult?.msg);
      }
    } else {
      setError(validationErrors);
    }
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
            <p className=" paragraph">Moment Feels Like Home!</p>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Mobile"
              values={newValue}
              setValues={setNewValue}
              field="phone"
            />
            {error.phone && <p className="error">{error.phone}</p>}
            <div className="get-otp">
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
            <div className="reset-pass">
              <Button label="Reset Password" onClick={handlePassword} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
