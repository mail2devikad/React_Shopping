import React from "react";
import Pillbutton from "../UI/Pillbutton";
import Categorycard from "../UI/Categorycard";
import Hoodies from "../../../../assets/images/Hoodies.png";
import Shoe from "../../../../assets/images/Shoe.png";
import Bag from "../../../../assets/images/Bag.png";
import specs from "../../../../assets/images/specs.png";
import Trousers from "../../../../assets/images/Trousers.png";

const Categories = () => {
  return (
    <div className="lg:mx-20 mx-5 mb-10">
      <Pillbutton pillName="Categories" />
      <div className="grid lg:gap-10 lg:grid-cols-8 gap-10 grid-cols-5">
        <Categorycard image={Hoodies} title="Hoodies" />
        <Categorycard image={Shoe} title="Shoes" />
        <Categorycard image={Bag} title="Bag" />
        <Categorycard image={specs} title="Accessories" />
        <Categorycard image={Trousers} title="Shorts" />
        <div className="lg:inline-block hidden">
          <Categorycard 
          image={Hoodies} 
          title="Hoodies" />
        </div>
        <div className="lg:inline-block hidden">
          <Categorycard
            image={Shoe}
            title="Shoes"
            className="lg:inline-block hidden"
          />
        </div>
        <div className="lg:inline-block hidden">
          <Categorycard
            image={Bag}
            title="Bag"
            className="lg:inline-block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
