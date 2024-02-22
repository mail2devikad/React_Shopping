import React from "react";
import Navbar from "../../components/blocks/Navbar";
import Footer from "../../components/blocks/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen lg:px-20 px-5">
        <h2 className="text-center text-lg font-bold mt-10 mb-5">About Us</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
