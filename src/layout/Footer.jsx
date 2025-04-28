import React from 'react'
import logoWhite from "../assets/logoWhite.png";
import twitter from "../assets/twitter.png"
import intstagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"


const Footer = () => {
  return (
    <div className="bg-green flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10 lg:px-20 w-[100%]">
      <footer className="w-[100%] md:w-[80%]">
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
              <li>Home</li>
              <li>About Us</li>
              <li>Our Resources</li>
              <li>Contact Us</li>
            </ul>
            <ul className="text-white leading-10">
              <li className="font-bold">Help</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
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
          <p>Copyright AgriNex 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer