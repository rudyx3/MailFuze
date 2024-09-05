import { UserButton , SignInButton , SignedIn ,SignedOut } from "@clerk/clerk-react";
import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
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
            <div className="h-[40px] w-[40px] bg-bgWhite items-center flex justify-center rounded-full border-AccentPurpleBord border-2">
              <FaUser size={25} style={{ color: "#020202" }} />
            </div>
            <div className="pl-3">
              <button className="bg-white text-TextBlack py-1 px-4 rounded-lg border-2 border-AccentPurpleBord font-semibold">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Show SignInButton when the user is signed out */}
        <SignedOut>
        <button  onClick={handleLoginClick} className="bg-white text-TextBlack py-1 px-4 rounded-lg border-2 border-AccentPurpleBord font-medium">
            Login
          </button>
        </SignedOut>
{/*       <div className="hidden md:flex items-center">
        <div className="h-[55px] w-[55px] bg-bgWhite items-center flex justify-center rounded-full border-AccentPurpleBord border-2">
          <FaUser size={30} style={{ color: "#020202" }} />
        </div>
        <div className="pl-3">
          <button className="bg-white text-TextBlack py-1 px-4 rounded-lg border-2 border-AccentPurpleBord font-medium">
            SignUp
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
