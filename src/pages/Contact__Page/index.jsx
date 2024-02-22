import React from "react";
import Navbar from "../../components/blocks/Navbar";
import Footer from "../../components/blocks/Footer";
import contact from "../../assets/images/contact.png";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:h-screen lg:px-20 px-5">
        <div className="grid lg:grid-cols-2 mt-5">
          <img src={contact} alt="contact image" />
          <div className=" ml-10">
            <h2 className="text-5xl font-semibold mt-10">Contact us</h2>
            <div className="flex mt-14">
              <div >
                <p className="text-blue-800 text-xl font-semibold">Visit us</p>
                <p className="mt-3">
                  2972 Westheimer Rd.
                  <br /> Santa Ana, Illinois
                  <br /> 85486
                </p>
              </div>
              <div className=" ml-20">
                <p className=" text-xl font-semibold">Contact</p>
                <p className="mt-3">contact@company.com</p>
                <p>(406)555-0120</p>
              </div>
            </div>
            <div className="flex mt-10">
              <Input 
              type="password"
              placeholder="Email"/>
              <div
                className="bg-[#3E56A2] border-[#1B3A9C] text-white rounded-full border-2 text-center 
                 lg:font-semibold lg:text-xl mt-8 ml-3 lg:h-[50px] lg:w-[150px] md:h-[40px] md:w-[130px]
                 h-[40px] w-[100px] lg:pt-2 pt-1">
                <Button label="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
