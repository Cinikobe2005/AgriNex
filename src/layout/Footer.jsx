import React from "react";
import logoWhite from "../assets/logoWhite.png";
import twitter from "../assets/twitter.png";
import intstagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  return (
    <div className="bg-green flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10 lg:px-20 w-[100%]">
      <footer className="w-11/12 mx-auto container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <img src={logoWhite} alt="AgriNex Logo" />
            <p className="text-white font-light leading-7 w-full md:w-90 mt-4 md:mt-10">
              We drive innovation to support farmers, enhance food security and
              grow sustainable agribusiness across Africa
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <ul className="text-white leading-10">
              <li className="font-bold">Quick links</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/">Our Resources</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <ul className="text-white leading-10">
              <li className="font-bold">Help</li>
              <li>
                <Link to="/">Faqs</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/our-work">How it Works</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-10">
          <p className="text-white">Follow us on</p>
          <div className="flex gap-4 mt-4">
            <img src={twitter} alt="Twitter" />
            <img src={intstagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>
        <div className="flex-grow h-px bg-gray-300 mt-10 font-bold w-[100%]"></div>
        <div className="text-center mt-4 text-white">
          <p>&copy; Copyright AgriNex 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
