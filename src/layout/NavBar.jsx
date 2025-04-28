import React from "react";
import Button from "../components/Button";
import logo from "../assets/AgriNex.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import menuCloseIcon from "../assets/menuCLose.svg";
import profile from "../assets/profile.svg";
import { useEffect } from "react";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsToken(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-white py-4 px-6 md:px-10 lg:px-20">
        <img src={logo} alt="AgriNex Logo" className="w-24 md:w-32" />
        <ul className="hidden lg:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "hover:text-green cursor-pointer " : "text-green"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "hover:text-green cursor-pointer" : "text-green"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/our-work"
            className={({ isActive }) =>
              isActive ? "hover:text-green cursor-pointer" : "text-green"
            }
          >
            Our Work
          </NavLink>
        
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "hover:text-green cursor-pointer" : "text-green"
            }
          >
            Contact Us
          </NavLink>
        </ul>

        {isToken ? (
          <div className="hidden lg:flex space-x-2 items-center">
            <img src={profile} alt="" />
            <Link
              className="text-danger text-[20px] font-medium"
              to="/"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex space-x-2">
            <Link to="/auth/signin" onClick={toggleSidebar}>
              <Button className="hover:text-white">SignIn</Button>
            </Link>
            <Link to="/auth/signup" onClick={toggleSidebar}>
              <Button className="bg-green text-white">SignUp</Button>
            </Link>
          </div>
        )}

        <div className="lg:hidden">
          <button onClick={toggleSidebar}>
            <img src={menuIcon} alt="Menu Icon" className="w-8 h-8 " />
          </button>
        </div>
      </nav>

      <div
        className={`fixed  top-0 right-0 h-full md:w-[30%] w-[45%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
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
            Contact Us
          </li>
        </ul>
        {isToken ? (
          <div className="flex flex-col space-y-2 p-6">
            <img src={profile} alt="" />
            <Link className="text-danger" to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 p-6 ">
            <Link to="/auth/signin" onClick={toggleSidebar}>
              <Button className="hover:text-white " size="sm">SignIn</Button>
            </Link>
            <Link to="/auth/signup" onClick={toggleSidebar}>
              <Button className="bg-green text-white " size="sm">SignUp</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
