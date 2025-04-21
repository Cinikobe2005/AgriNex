import React from 'react'
import logoWhite from "../assets/logoWhite.png";
import twitter from "../assets/twitter.png"
import intstagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"


const Footer = () => {
  return (
    <div className=" bg-green flex  justify-between items-center py-4 px-6 md:px-10 lg:px-20 w-[100%]">
      <footer className="w-[80%]">
        <div className="flex justify-between">
          <div>
            <img src={logoWhite} alt="AgriNex Logo" />
            <p className="text-white font-light leading-7 w-90 mt-10">
              We drive innovation to support farmers, enhance food security and
              grow sustainable agribusiness aross Africa
            </p>
          </div>
          <div className="flex ">
            <ul className="text-white leading-10 ">
              <li>Quick links</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Resources</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul className="text-white leading-10 ">
              <li>Help</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-white">Follow us on</p>
          <div className="flex gap-4 mt-4">
            <img src={twitter} alt="" />
            <img src={intstagram} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="flex-grow h-px bg-gray-300 mt-10 font-bold w-[100%]"></div>
        <div className="text-center mt-4 text-white">
          <p>Copyright AgriNex 2025 All right reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer