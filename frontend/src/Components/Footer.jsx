import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full mt-7 h-80 flex flex-col items-center">
      <div className="bg-DeepPurple flex items-center justify-center w-full ">
        <p className="font-semibold text-[30px] mr-10">
          Subscribe to our Newsletter
        </p>
        <div className=" py-7 w-[380px] relative ml-10">
          <input
            type="text"
            className="w-full bg-bgWhite rounded-full border-none pl-5 py-3 text-[20px] text-TextBlack"
            placeholder="Your email.."
          />
          <button className="hover:bg-AccentPurpleBord transition-all ease-in-out duration-500 w-10 h-10 items-center justify-center flex rounded-full bg-DeepPurple absolute top-9 right-3">
            <FaLongArrowAltRight size={30} style={{ color: "white" }} />
          </button>
        </div>
      </div>
      <div className="bg-AccentPurpleBord w-full h-full flex items-center justify-evenly">
        <div>
          <h2 className="text-4xl font-medium text-bgWhite">MailFuze</h2>
        </div>
        <div className="flex flex-col  px-12 mt-5">
          <div className="flex justify-between">
            <div className="flex flex-col gap-5 ">
              <a>Home</a>
              <a>Email Builder</a>
              <a>Dashboard</a>
            </div>
            <div className="flex flex-col gap-5 ">
              <a>About Us</a>
              <a>Contact Us</a>
            </div>
          </div>
          <div className="underline font-light text-DeepPurple mt-5 px-10">
            <p>© Copyright 2024 - MailFuze Team</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-3 font-semibold underline">Social Links</p>
          <div className="flex gap-5">
            <button>
              <FaFacebookF size={35} />
            </button>
            <button>
              <FaInstagram size={35} />
            </button>
            <button>
              <FaTwitter size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
