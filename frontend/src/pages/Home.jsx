import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";

export const Home = () => {
  return (
    <>
    <Helmet>
      <title>MailFuze - Deliver Emails Better</title>
    </Helmet>
      <Navbar/>
      <div className="text-TextBlack">
        Hero Section
      </div>
      <div className="text-TextBlack">
        Cards Section
      </div>
      <div className="text-TextBlack">
        Schedule
      </div>
      <Footer/>
    </>
  );
};

export default Home;
