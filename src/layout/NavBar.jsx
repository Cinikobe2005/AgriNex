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
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsToken(false);
  };

  return (
    <>
      <nav className=" bg-white py-4 px-6 md:px-[90px] lg:px-[100px]">
        <div className="w-11/12 container mx-auto flex justify-between items-center">
          <img src={logo} alt="AgriNex Logo" className="w-24 md:w-32" />
          <ul className="hidden lg:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " cursor-pointer active-nav-item "
                  : "text-black hover:text-green "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-green cursor-pointer active-nav-item"
                  : "text-black hover:text-green"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-green cursor-pointer active-nav-item"
                  : "text-black hover:text-green"
              }
            >
              Our Work
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-green cursor-pointer active-nav-item"
                  : "text-black hover:text-green"
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
              <Link to="/auth/signin">
                <Button className="hover:text-white">SignIn</Button>
              </Link>
              <Link to="/auth/signup">
                <Button className="bg-green text-white">SignUp</Button>
              </Link>
            </div>
          )}

          <div className="lg:hidden">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button ">
                  <img src={menuIcon} alt="Menu Icon" className="w-8 h-8 " />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay "
                ></label>

                <div className="menu bg-white text-base-content min-h-full w-50 p-4 flex justify-between pt-5 ">
                  {/* Sidebar content here */}
                  <ul className="flex flex-col space-y-4">
                    <li className="hover:text-green cursor-pointer">Home</li>
                    <li className="hover:text-green cursor-pointer">About</li>

                    <li className="hover:text-green cursor-pointer mb-5">
                      Contact Us
                    </li>
                  </ul>
                  {isToken ? (
                    <div>
                      <hr />
                      <div className="flex  items-center space-x-2 my-2 ">
                        <img src={profile} alt="" className="w-10" />
                        <Link
                          className="text-danger"
                          to="/"
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2  ">
                      <hr />
                      <Link to="/auth/signin">
                        <Button className="hover:text-white " size="sm">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/auth/signup">
                        <Button className="bg-green text-white " size="sm">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
