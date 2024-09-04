import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="text-bgWhite w-full h-24 bg-DeepPurple flex items-center justify-between px-8 relative">
      <div>
        <h2 className="text-4xl font-medium">MailFuze</h2>
      </div>
      <div className="hidden md:flex items-center font-medium space-x-16">
        <a
          href="#home"
          className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
        >
          Home
        </a>
        <a
          href="#email-builder"
          className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
        >
          Email Builder
        </a>
        <a
          href="#dashboard"
          className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
        >
          Services
        </a>
        <a
          href="#about-us"
          className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
        >
          About Us
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? "" : <FaBars size={30} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-DeepPurple text-bgWhite transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-3xl font-medium">MailFuze</h2>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes size={30} />
          </button>
        </div>
        <div className="flex flex-col items-center font-medium space-y-6 mt-10">
          <a
            href="#home"
            className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
          >
            Home
          </a>
          <a
            href="#email-builder"
            className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
          >
            Email Builder
          </a>
          <a
            href="#dashboard"
            className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
          >
            Services
          </a>
          <a
            href="#about-us"
            className="hover:text-AccentPurpleBord transition-all ease-in-out duration-300"
          >
            About Us
          </a>
          <div className="flex items-center mt-3">
            <div className="h-[40px] w-[40px] bg-transparent items-center flex justify-center rounded-full border-AccentPurpleBord border-2">
              <FaUser size={22} style={{ color: "#FBFCFF" }} />
            </div>
            <div className="pl-3">
              <button className="bg-transparent text-bgWhite py-1 px-4 rounded-lg border-2 border-bgWhite border-opacity-75 font-semibold hover:bg-AccentPurpleBord hover:bg-opacity-55 transition-all ease-in-out duration-300">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <div className="h-[50px] w-[50px] bg-transparent items-center flex justify-center rounded-full border-AccentPurpleBord border-2">
          <FaUser size={24} style={{ color: "#FBFCFF" }} />
        </div>
        <div className="pl-3">
          <button className="bg-transparent text-bgWhite py-1 px-4 rounded-lg border-2 border-bgWhite border-opacity-75 font-semibold hover:bg-AccentPurpleBord hover:bg-opacity-55  transition-all ease-in-out duration-300">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
