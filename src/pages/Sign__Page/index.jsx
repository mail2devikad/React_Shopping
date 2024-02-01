import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import "../Sign__Page/styles/style.css";
import { PiEyeClosedBold } from "react-icons/pi";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  return (
    <div className="back">
      <div className="main-box">
        <div className="box">
          <div className="heading">Welcome</div>
          <div>
            <Input
              data={name}
              label="Name"
              type="text"
              placeholder="Enter your name"
              setData={setName}
            />
          </div>
          <div>
            <Input
              data={email}
              label="Email Id"
              type="text"
              placeholder="Enter your email-id"
              setData={setEmail}
            />
          </div>
          <div>
            <Input
              data={phone}
              label="Phone Number"
              type="text"
              placeholder="Enter number"
              setData={setPhone}
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
          <div className="relative-container">
            <Input
              data={confirmpass}
              label="Confirm Password"
              type="text"
              placeholder="*********"
              setData={setConfirmpass}
            />
            <PiEyeClosedBold className="absolute-eye"/>
          </div>
          <div>
            <Button label="Sign Up" />
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
