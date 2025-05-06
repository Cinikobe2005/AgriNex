import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import logo from "../assets/AgriNex.png";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import defaultProfile from "../assets/profile.svg";

const NavBar = () => {
  const [isToken, setIsToken] = useState(false);
  const [profilePicture, setProfilePicture] = useState(defaultProfile);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.token) {
      setIsToken(true);
      setProfilePicture(storedUser.profilePicture || defaultProfile);
    } else {
      setIsToken(false);
      setProfilePicture(defaultProfile);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsToken(false);
    setProfilePicture(defaultProfile);
  };

  const renderLogoutUI = () => (
    <>
      <img
        key={profilePicture}
        src={profilePicture}
        alt="User Profile"
        className="w-10 h-10 rounded-full"
        crossOrigin="anonymous"
        onError={(e) => (e.target.src = defaultProfile)}
      />
      <button
        className="text-danger text-[20px] font-medium"
        onClick={() => {
          (document.getElementById("mobile-drawer").checked = false),
            document.getElementById("logout_modal").showModal();
        }}
      >
        Logout
      </button>
    </>
  );

  return (
    <>
      <nav className="bg-white py-4 px-6 md:px-[90px] lg:px-[100px]">
        <div className="w-11/12 container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="AgriNex Logo" className="w-24 md:w-32" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-4">
            {["/", "/about", "/our-work", "/contact-us"].map((path, i) => {
              const labels = ["Home", "About", "Our Work", "Contact Us"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-green cursor-pointer active-nav-item"
                      : "text-black hover:text-green"
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </ul>

          {/* Desktop Auth */}
          <div className="hidden lg:flex space-x-2 items-center">
            {isToken ? (
              renderLogoutUI()
            ) : (
              <>
                <Link to="/auth/signin">
                  <Button className="hover:text-white">Sign In</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button className="bg-green text-white">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Drawer */}
          <div className="lg:hidden">
            <div className="drawer drawer-end">
              <input
                id="mobile-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="mobile-drawer" className="drawer-button">
                  <img src={menuIcon} alt="Menu Icon" className="w-8 h-8" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="mobile-drawer"
                  className="drawer-overlay"
                ></label>
                <div className="menu bg-white text-base-content min-h-full w-50 p-4 flex justify-between pt-5">
                  <ul className="flex flex-col space-y-4">
                    {["/", "/about", "/contact-us", "/our-work"].map(
                      (path, i) => {
                        const labels = [
                          "Home",
                          "About",
                          "Contact Us",
                          "Our Work",
                        ];
                        return (
                          <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                              isActive
                                ? "hover:text-green cursor-pointer active-nav-item"
                                : "text-green"
                            }
                            onClick={() =>
                              (document.getElementById(
                                "mobile-drawer"
                              ).checked = false)
                            }
                          >
                            {labels[i]}
                          </NavLink>
                        );
                      }
                    )}
                  </ul>
                  {isToken ? (
                    <div className="flex items-center space-x-2 my-2">
                      {renderLogoutUI()}
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <hr />
                      <Link
                        to="/auth/signin"
                        onClick={() =>
                          (document.getElementById(
                            "mobile-drawer"
                          ).checked = false)
                        }
                      >
                        <Button className="hover:text-white" size="sm">
                          Sign In
                        </Button>
                      </Link>
                      <Link
                        to="/auth/signup"
                        onClick={() =>
                          (document.getElementById(
                            "mobile-drawer"
                          ).checked = false)
                        }
                      >
                        <Button className="bg-green text-white" size="sm">
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

      {/* Shared Modal */}
      <dialog id="logout_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to logout?</p>
          <div className="modal-action flex gap-5">
            <Link
              to="/"
              onClick={() => {
                handleLogout();
                document.getElementById("logout_modal").close();
              }}
              className="outline-1 py-2 px-6 outline-danger hover:bg-danger hover:text-white rounded-[6px] cursor-pointer"
            >
              Yes
            </Link>
            <button
              onClick={() => document.getElementById("logout_modal").close()}
              className="outline-1 py-2 px-6 outline-green hover:bg-green hover:text-white rounded-[6px] cursor-pointer"
            >
              No
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NavBar;
