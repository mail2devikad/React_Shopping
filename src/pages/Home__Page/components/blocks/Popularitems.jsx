import React from "react";
import Pillbutton from "../UI/Pillbutton";
import Popularcard from "../UI/Popularcard";
import Shirt from "../../../../assets/images/Shirt.png";

const Popularitems = () => {
  return (
    <div className="lg:px-20 px-5">
      <Pillbutton pillName="Popular" />
      <div className="grid lg:gap-5 lg:grid-cols-4 gap-10 grid-cols-2">
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
        <Popularcard
          itemimage={Shirt}
          itemtitle="Men's Ice-Dye Pullover Hoodie"
          price="₹128.97"
        />
      </div>
    </div>
  );
};

export default Popularitems;
