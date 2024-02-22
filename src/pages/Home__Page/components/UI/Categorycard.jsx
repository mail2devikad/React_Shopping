import React from "react";

const Categorycard = ({ image, title }) => {
  return (
    <div>
      <div className="grid justify-center">
        <img
          src={image}
          alt={title}
          className=" rounded-full object-cover lg:w-28 lg:h-28 w-14 h-14"
        />
        <span className="flex justify-center mt-2 lg:text-base text-sm">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Categorycard;
