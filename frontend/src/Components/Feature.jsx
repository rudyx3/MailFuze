import React from "react";

export const Feature = ({ img }) => {
  return (
    <div className="flex py-10 md:px-12 items-center w-full">
      <div className="flex-1 flex items-center justify-center px-10 ">
        <div className="w-full ">
          <img
            src={img}
            alt="Schedule"
            className="w-52 sm:w-72 md:w-96 lg:w-[500px]"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-left">
          <h2 className="text-[35px] font-semibold text-purple-700 mb-4">
            Scheduled Sending & <br />
            Timely Delivery
          </h2>
          <p className="text-[22px] text-TextBlack mb-8">
            Take control of your email delivery by choosing <br />
            the exact date and time your emails are sent <br />
            automatically, even while you're offline.
          </p>
          <div className="flex items-center justify-end w-[530px]">
            <button className="bg-transparent hover:bg-BlueCol border-BlueCol border-2 font-medium text-BlueCol hover:text-bgWhite px-7 py-2 rounded-lg transition-all ease-in duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
