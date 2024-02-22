import React, { useState } from "react";
import black from "../../assets/images/black.png"
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="lg:border-b">
      <nav className="flex justify-between lg:py-8 py-4 lg:px-20 px-5">
        <div className="">
          <img src={black} alt="logo" className="lg:block md:block hidden" />
          <button  onClick={toggleMobileMenu}>
            <RiMenu2Fill className="lg:hidden md:hidden w-6 h-6" />
          </button>
        </div>
        <div className="space-x-8 lg:block md:block hidden">
          {/* <a href="" className="text-[#3e56a2] underline underline-offset-4">
            Home
          </a> */}
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden block space-y-4 w-28">
            <Link to="/home" className="block mt-5">Home</Link>
            <Link to="/contact" className="block">Contact</Link>
            <Link to="/about" className="block">About</Link>
            <Link to="/signup" className="block">Sign Up</Link>
          </div>
        )}
        <div className="relative lg:block md:block hidden">
          <input
            type="search"
            placeholder="what are you looking for?"
            className="w-64 rounded py-2 px-4 text-sm bg-[#F5F5F5]"
          />
          <button className="absolute right-2 top-2">
            <IoSearch className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-around pt-2">
          <div className="pr-5">
            <GoPerson className="lg:block md:block hidden w-6 h-6" />
            <FaRegHeart className="lg:hidden md:hidden w-5 h-5" />
          </div>
          <div>
            <IoCartOutline className="w-6 h-6" />
          </div>
        </div>
      </nav>
      <div className="md:hidden block mt-4 px-5 pb-3 relative">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="w-full rounded py-2 pl-16 text-sm bg-[#F5F5F5]"
        />
        <button className="absolute left-10 top-2">
          <IoSearch className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
