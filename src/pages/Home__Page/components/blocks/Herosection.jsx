import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import apple from "../../../../assets/images/apple.png";
import hero from "../../../../assets/images/hero.png";

const Herosection = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 bg-black lg:mx-20 md:mx-10 mx-5 lg:mt-8 mt-4  text-white lg:py-16 md:py-12 py-10 lg:rounded-none rounded-md">
      <div className=" lg:ml-40 md:ml-20 ml-10 lg:mt-10 ">
        <div className="flex">
          <img
            src={apple}
            alt="apple logo"
            className="lg:w-14 lg:h-14 w-8 h-8"
          />
          <h1 className="pl-3 lg:pt-4 pt-2 lg:text-base text-sm">
            iphone 14 Series
          </h1>
        </div>
        <div className="pt-5 lg:text-6xl md:text-4xl text-2xl font-medium tracking-wider ">
          Up to 10%<span className="block"> off Voucher</span>
        </div>
        <div className="lg:pt-8 pt-4 underline underline-offset-4 flex ">
          Shop Now
          <IoMdArrowForward className="w-6 h-6 ml-2" />
        </div>
      </div>
      <div className="ml-10 mt-10">
        <img
          src={hero}
          alt="hero image"
          className="lg:w-[496px] lg:h-[352px] md:w-[410px] md:h-[230px] h-48"
        />
      </div>
    </div>
  );
};

export default Herosection;
