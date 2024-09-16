import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heroImg from "../assets/heroImg.png";
import Card from "../Components/Card";
import emailBuilder from "../assets/emailBuilder.png";
import dash from "../assets/dash.jpg";
import Feature from "../Components/Feature";
import scheduleImg from "../assets/imgSch.png";
import LineBreak from "../Components/LineBreak";
import { useAuth, useUser } from "@clerk/clerk-react";

import axios from "axios";

export const Home = () => {
  //retreiving the session
  const session = useAuth();

  //development function working on it
  const getUserDetails = async () => {
    try {
      const token = session.sessionId;
      console.log(token);
      const response = await axios.get("http://localhost:5000/user/lists", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user lists:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>MailFuze - Deliver Emails Better</title>
      </Helmet>
      <Navbar type="home" />

      {/* The Main highlight section with CTA button*/}
      <section
        id="hero"
        className="text-TextBlack w-full flex flex-col lg:flex-row mt-5 px-8"
      >
        <div className="lg:w-1/2 flex flex-col justify-center items-center w-full order-2 lg:order-1">
          <div>
            <h1 className="font-extrabold lg:text-[50px] text-[33px] text-DeepPurple">
              Craft, Send, and
            </h1>
            <h1 className="font-extrabold lg:text-[50px] text-[33px] text-DeepPurple">
              Track Emails
            </h1>
            <h1 className="font-extrabold lg:text-[50px] text-[33px] text-DeepPurple">
              - All in One Place
            </h1>
            <p className="font-semibold lg:text-[17px] text-[15px] text-TextBlack mt-4 lg:w-72 w--52">
              Deliver customized emails and elevate your email marketing with
              MailFuze.
            </p>

            <button
              onClick={() => {
                getUserDetails();
              }}
              className="hover:bg-AccentPurpleBord bg-DeepPurple text-bgWhite py-2 px-9 rounded-md mt-3 font-medium text-lg transition-all ease-in duration-200"
            >
              Try Now
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-3 lg:mt-0 order-1 lg:order-2">
          <div className="lg:py-10 mb-4">
            <img
              src={heroImg}
              alt="Hero Section image showing emails delivering faster and customized"
              className="w-52 sm:w-72 md:w-96 lg:w-[500px]"
            />
          </div>
        </div>
      </section>

      {/*lINE BREAK to include the end of section*/}
      <LineBreak cln={"mt-10"} />

      {/* The card section to display services*/}
      <section
        id="services"
        className="text-TextBlack w-full flex items-center justify-center flex-col lg:flex-col mt-2 px-8"
      >
        <div className="text-TextBlack pt-5">
          <h1 className="font-extrabold lg:text-[45px] text-[30px] text-TextBlack">
            What do we offer ?
          </h1>
        </div>

        <div className="flex mt-7 w-full gap-28 items-stretch justify-center">
          <Card title={"Email Builder"} img={emailBuilder}>
            <div className="text-DeepPurple text-center sm:text-left font-medium pt-3">
              <p>
                Discover a powerful tool that enables effortless customization
                of email variables through a simple drag-and-drop interface.
              </p>
              <p className="mt-4">
                Efficiently send 30+ personalized emails in just minutes.
              </p>
            </div>

            <div className="text-TextBlack text-center sm:text-left font-medium pt-3 pb-11">
              <h2 className="font-semibold underline">Getting Started:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Begin by creating a new list, adding email addresses manually
                  or importing them via an Excel sheet.
                </li>
                <li>
                  The Email Builder automatically detects variable fields within
                  your Excel sheet and dynamically customizes the email content
                  for each recipient.
                </li>
              </ul>
            </div>
          </Card>

          <div className="flex items-center">
            <div className="h-[500px] w-2 bg-DeepPurple rounded-lg"></div>
          </div>

          <Card title={"Dashboard"} img={dash}>
            <div className="text-DeepPurple text-center sm:text-left font-medium pt-3">
              <p>
                Your centralized hub for managing and tracking all your email
                campaigns.
              </p>
            </div>

            <div className="text-TextBlack text-center sm:text-left font-medium pt-3 pb-11">
              <h2 className="font-semibold underline">Dashboard Features:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Campaign Overview: Get a quick snapshot of your active and
                  past email campaigns, including key metrics like open rates
                  and click-through rates.
                </li>
                <li>
                  Analytics & Reports: Dive deep into detailed analytics to
                  monitor performance, refine your strategy, and achieve better
                  results.
                </li>
                <li>
                  Contact Management: Organize your contacts, import new lists,
                  and segment your audience for targeted marketing efforts.
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <LineBreak cln={"mt-20"} />

      {/* Highlighting features with this section*/}
      <section
        className="text-TextBlack w-full flex items-center justify-center flex-col lg:flex-col mt-1 px-8"
        id="schedule"
      >
        <Feature img={scheduleImg} />
      </section>

      {/* Final section for the footer*/}
      <Footer />
    </>
  );
};

export default Home;
