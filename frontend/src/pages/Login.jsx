import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import loginImage from "../assets/login.jpg";
import Navbar from "../Components/Navbar";
import { SignIn} from "@clerk/clerk-react";

export const Login = () => {

  return (
    <>
      <Helmet>
        <title>Login | MailFuze - Welcome Back</title>
      </Helmet>
      <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
        <Navbar type={"login"} />
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Side: Text and Image */}
          <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:p-4 lg:sm:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                Welcome Back!
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-2 sm:mb-4">
                LOGIN
              </h2>
              <p className="text-gray-600">
                Ready to Continue Where You Left Off?
              </p>
            </div>
            <div className="flex justify-center w-full">
              <img
                src={loginImage}
                alt="Login Illustration"
                className="w-full max-w-xs sm:max-w-md h-auto"
              />
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
            <SignIn signUpUrl="/signup"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
