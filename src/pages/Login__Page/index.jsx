import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import "../Login__Page/styles/style.css";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiEyeClosedBold } from "react-icons/pi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="background">
      <div className="card">
        <div className="close">
        <IoCloseCircleOutline className="close-icon"/>
        </div>
        <div className="card1">
          <div>
            <div className="login_head">Welcome back !</div>
            <p className="p_login">Where Every Bite Tells a Story, and Every</p>
            <p className="p_login">Moment Feels Like Home!</p>
          </div>
          <div className="align">
            <Input
              data={username}
              label="Email ID/Mobile Number"
              type="text"
              placeholder="Mobile Number"
              setData={setUsername}
            />
          </div>
          <div className="relative-container">
            <Input
              data={password}
              label="Password"
              type="password"
              placeholder="*********"
              setData={setPassword}
            />
            <PiEyeClosedBold className="absolute-eye"/>
          </div>
          <div>
            <Button label="Login" />
          </div>
          <div className="links">
            <Link to="/forgotpassword">Forgot Password ?</Link>
            <Link to="/signup">Sign Up</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
