import React from "react";
import { Helmet } from "react-helmet-async";
import loginImage from "../assets/login.jpg";
import Navbar from "../Components/Navbar";

import { SignUp } from "@clerk/clerk-react";
export const SignUpPage = () => {


  return (
    <>
      <Helmet>
        <title>Sign Up | MailFuze - Welcome</title>
      </Helmet>
      <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
        <Navbar />
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Side: Text and Image */}
          <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:p-4 lg:sm:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                Welcome to <span className="text-purple-700">Mail Fuze</span>!
              </h1>

              <h2 className="text-3xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">
                Sign Up
              </h2>
              <p className="text-gray-600 text-xl">
                Create your account and start sending Emails Smarter
              </p>
            </div>
            <div className="flex justify-center w-full">
              <img
                src={loginImage}
                alt="Sign Up Illustration"
                className="w-full max-w-xs sm:max-w-md h-auto"
              />
            </div>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
      <SignUp path="/signup" routing="path" signInUrl="/login" />
    </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
