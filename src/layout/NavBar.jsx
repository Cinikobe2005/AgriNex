import React from "react";
import Button from "../components/Button";
import logo from "../assets/AgriNex.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import menuCloseIcon from "../assets/menuCLose.svg";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-white py-4 px-6 md:px-10 lg:px-20">
        <img src={logo} alt="AgriNex Logo" className="w-24 md:w-32" />
        <ul className="hidden md:flex space-x-4">
          <li className="hover:text-green cursor-pointer">Home</li>
          <li className="hover:text-green cursor-pointer">About</li>
          <li className="hover:text-green cursor-pointer">Our Resources</li>
          <li className="hover:text-green cursor-pointer">Contact Us</li>
        </ul>

        <div className="hidden md:flex space-x-2">
          <Link to="/auth/signin">
            <Button className="hover:text-white">SignIn</Button>
          </Link>
          <Link to="/auth/signup">
            <Button className="bg-green text-white">SignUp</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <img src={menuIcon} alt="Menu Icon" className="w-8 h-8 " />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          src={menuCloseIcon}
          alt="Close Menu"
          className="ms-35 mt-5 cursor-pointer  "
          onClick={toggleSidebar}
        />
        <ul className="flex flex-col space-y-4 p-6">
          <li
            className="hover:text-green cursor-pointer"
            onClick={toggleSidebar}
          >
            Home
          </li>
          <li
            className="hover:text-green cursor-pointer"
            onClick={toggleSidebar}
          >
            About
          </li>
          <li
            className="hover:text-green cursor-pointer"
            onClick={toggleSidebar}
          >
            Our Resources
          </li>
          <li
            className="hover:text-green cursor-pointer"
            onClick={toggleSidebar}
          >
            Contact Us
          </li>
        </ul>
        <div className="flex flex-col space-y-2 p-6">
          <Link to="/auth/signin" onClick={toggleSidebar}>
            <Button className="hover:text-white">SignIn</Button>
          </Link>
          <Link to="/auth/signup" onClick={toggleSidebar}>
            <Button className="bg-green text-white">SignUp</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
