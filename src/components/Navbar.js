import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { ThemeChange } from "./ThemeChange";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <div className="navbar-container relative bg-slate-200 dark:bg-gray-800">
      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300 ease-in"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="sidebar absolute top-0 left-0 w-20 md:w-32 h-screen bg-slate-200 dark:bg-gray-800 dark:text-white  shadow-2xl md:text-2xl flex flex-col items-center">
          <h2 className="my-2 text-6xl md:text-9xl text-blue-400">N</h2>
          <h2 className="text-blue-400 ">Nick</h2>
          <ThemeChange />
          <Link
            to="/Home"
            className={`text-center mb-10 w-16 md:w-24 shadow-slate-500 rounded-2xl py-1 md:pt-4 md:mt-10 ${
              location.pathname === "/Home"
                ? "shadow-inner"
                : "shadow hover:scale-110"
            }`}
          >
            <i className="fa-solid fa-house fa-lg md:fa-2xl text-blue-400 md:mb-5"></i>
            <br />
            <span className="text-blue-400 text-center">Home</span>
          </Link>

          <Link
            to="/Profile"
            className={`text-center mb-10 w-16 md:w-24 shadow-slate-500 rounded-2xl py-1 md:pt-4 md:mt-10 ${
              location.pathname === "/Profile"
                ? "shadow-inner"
                : "shadow hover:scale-110"
            }`}
          >
            <i className="fa-solid fa-id-badge fa-lg md:fa-2xl text-blue-400 md:mb-5"></i>
            <br />
            <span className="text-blue-400 text-center">Profile</span>
          </Link>
          <Link
            to="/Projects"
            className={`text-center mb-10 w-16 md:w-24 shadow-slate-500 rounded-2xl py-1 md:pt-4 md:mt-10 ${
              location.pathname === "/Projects"
                ? "shadow-inner"
                : "shadow hover:scale-110"
            }`}
          >
            <i class="fa-solid fa-laptop-file fa-lg md:fa-2xl text-blue-400 md:mb-5"></i>
            <br />
            <span className="text-blue-400 text-center">Projects</span>
          </Link>
          <Link
            to="/About"
            className={`text-center mb-10 w-16 md:w-24 shadow-slate-500 rounded-2xl py-1 md:pt-4 md:mt-10 ${
              location.pathname === "/About"
                ? "shadow-inner"
                : "shadow hover:scale-110"
            }`}
          >
            <i className="fa-solid fa-user-graduate fa-lg md:fa-2xl text-blue-400 md:mb-5"></i>
            <br />
            <span className="text-blue-400 text-center">About</span>
          </Link>
        </div>
      </Transition>

      <button
        onClick={handleToggle}
        className={`navbar-toggle-button absolute top-0 left-0 mt-6 ml-6 transition-transform duration-300 text-3xl ${
          isOpen ? "translate-x-20 md:translate-x-32" : ""
        }`}
      >
        {isOpen ? (
          <i className="fa-solid fa-square-xmark fa-2xl text-blue-400"></i>
        ) : (
          <i className="fa-solid fa-bars fa-2xl text-blue-400"></i>
        )}
      </button>
    </div>
  );
};
