import React from "react";
import Qrcode  from "../../assets/images/Qrcode.png"
import google from "../../assets/images/google.png"
import appstore from "../../assets/images/appstore.png"
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="bg-black pt-12 mt-10 pb-20 px-20">
        <div className=" text-white grid lg:gap-10 lg:grid-cols-5 gap-24 grid-cols-2  ">
          <div>
            <h1 className="text-lg font-medium mb-5">Exclusive</h1>
            <p>Subscribe</p>
            <p className="text-sm mt-3 mb-2">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-white bg-black text-sm lg:w-48 lg:h-8 md:w-48 w-40 h-8 px-2"
              />
              <button className="absolute top-0 lg:right-5 md:right-24 -right-16 pt-1 ">
                <VscSend className="w-6 h-6"/>
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-5">Support</h1>
            <p className="text-sm">
              111 Bijoy sarani, Dhaka, DH
              <span className="block"> 1515,Bangladesh</span>
            </p>
            <p className="text-sm my-3">exclusive@gmail.com</p>
            <p className="text-sm">+99015-88888-9999</p>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-5">Account</h1>
            <p className="text-sm">My Account</p>
            <p className="text-sm my-3">Login/Register</p>
            <p className="text-sm">Cart</p>
            <p className="text-sm my-3">Wishlist</p>
            <p className="text-sm">Shop</p>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-5">Quick Link</h1>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm my-3">Terms of Use</p>
            <p className="text-sm">FAQ</p>
            <p className="text-sm my-3">Contact</p>
          </div>
          <div>
            <h1 className="text-lg font-medium mb-5">Download App</h1>
            <p className="text-xs text-[#FAFAFA]">
              save $3 with App New Users Only
            </p>
            <div className="flex flex-col md:flex-row pt-2">
              <div className="mr-2">
                <img
                  src={Qrcode}
                  alt="QR_code"
                  className=" w-full h-auto md:w-20 md:h-20"
                />
              </div>
              <div>
                <div className="w-24 h-10  my-1">
                  <img
                    src={google}
                    alt="google play icon"
                  />
                </div>
                <div className="w-24 h-10 ">
                  <img
                    src={appstore}
                    alt="app store icon"
                  />
                </div>
              </div>
            </div>
            <div className="flex pt-5 gap-5">
              <FaFacebookF />
              <FiTwitter />
              <FaInstagram />
              <FaLinkedinIn/>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
