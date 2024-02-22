import React from "react";
import Rectangle from "../../../../assets/images/Rectangle.png";

const Pillbutton = ({ pillName }) => {
  return (
    <div className="flex justify-between my-5">
      <div className="text-[#3e56a2] font-medium flex">
        <img
          src={Rectangle}
          alt="rectangle icon"
          className="lg:w-5 lg:h-10 w-2.5 h-7"
        />
        <span className="lg:pt-2 pt-1 lg:pl-3 pl-2 lg:text-base text-xs">
          {pillName}
        </span>
      </div>
      <span className="lg:text-base text-xs">See all</span>
    </div>
  );
};

export default Pillbutton;
