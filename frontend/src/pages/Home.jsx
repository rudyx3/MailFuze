import React from "react";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
    <Helmet>
      <title>MailFuze - Deliver Emails Better</title>
    </Helmet>
      <div className="bg-bgWhite text-TextBlack">Home</div>
    </>
  );
};

export default Home;
