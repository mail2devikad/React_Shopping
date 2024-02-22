import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Popularcard = ({itemimage,itemtitle,price}) => {
  return (
    <div className=" bg-[#F4F4F4] lg:w-72 w-44 lg:h-72 h-52 rounded-md mb-5">
      <div className="flex justify-end pt-1 pr-2">
        <FaRegHeart className="w-5 h-5" />
      </div>
      <div className="flex justify-center">
        <img
          src={itemimage}
          alt="card item image"
          className="lg:w-36 w-24 lg:h-48 h-32"
        />
      </div>
      <div className="lg:pl-5 pl-2 pt-2 lg:text-sm text-xs">
        {itemtitle}
      </div>
      <div className="lg:pl-5 pl-2 lg:text-sm text-xs">{price}</div>
    </div>
  );
};

export default Popularcard;
