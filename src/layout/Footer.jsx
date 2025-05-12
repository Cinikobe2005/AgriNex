import React from "react";
import logoWhite from "../assets/logoWhite.png";
import twitter from "../assets/twitter.png";
import intstagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router";

// List of available routes as seen in App.jsx
const availableRoutes = [
  "/", "/about", "/contact-us", "/our-work", "/auth/signup", "/auth/signin"
];

const FooterLink = ({ to, children }) => {
  const isAvailable = availableRoutes.includes(to);
  if (isAvailable) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <span className="cursor-not-allowed opacity-60">{children}</span>
  );
};

const Footer = () => {
  return (
    <div className="bg-green flex flex-col md:flex-row justify-between items-center py-4 px-3 md:px-10 xl:px-20 w-[100%]">
      <footer className="w-11/12 mx-auto container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <img loading="lazy" src={logoWhite} alt="AgriNex Logo" />
            <p className="text-white font-light leading-7 w-full md:w-90 mt-4 md:mt-10">
              We drive innovation to support farmers, enhance food security and
              grow sustainable agribusiness across Africa
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <ul className="text-white leading-10">
              <li className="font-bold">Quick links</li>
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/resources">Our Resources</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact-us">Contact Us</FooterLink>
              </li>
            </ul>
            <ul className="text-white leading-10">
              <li className="font-bold">Help</li>
              <li>
                <FooterLink to="/faqs">Faqs</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terms & Conditions</FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/our-work">How it Works</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-10">
          <p className="text-white">Follow us on</p>
          <div className="flex gap-4 mt-4">
            <img loading="lazy" src={twitter} alt="Twitter" />
            <img loading="lazy" src={intstagram} alt="Instagram" />
            <img loading="lazy" src={facebook} alt="Facebook" />
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
