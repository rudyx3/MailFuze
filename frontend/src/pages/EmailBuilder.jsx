import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import gearIcon from "../assets/Gear.jpg";  // Replace with the correct path for your gear image
import listImg from "../assets/List.jpg";  // Replace with the correct path for your list image
import { Link } from 'react-router-dom'
const EmailBuilder = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <Navbar type="home" userName={userName} />
      <div className="p-8 font-sans">
        {/* Email Builder Section */}
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">EMAIL BUILDER</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Welcome to the Email Builder. Customize your email messages with dynamic variables and send personalized emails to your list with ease.
          </p>
        </section>

        {/* How it Works Section */}
        <section className="flex flex-col md:flex-row items-center mb-10 md:space-x-10">
          <img src={gearIcon} alt="gears" className="w-40 h-40 mb-4 md:mb-0 ml-10" /> {/* Increased size */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-purple-700 mb-2">See How it Works</h3>
            <p className="text-lg text-black">
              Create a new list, import email data from Excel sheets or add dynamically, draft your content, and hit send. It's that simple!
            </p>
          </div>
        </section>

        {/* Create List Section */}
        <section className="flex flex-col md:flex-row items-center mb-10 md:space-x-10">
          <div className="text-left pl-6"> {/* Added padding-left to shift content to the right */}
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Let's start by creating a new list of emails</h3>
            <p className="text-lg text-black">
              Click the button below to create a new list or use an existing one.
            </p>
          </div>
          <img src={listImg} alt="create list" className="w-56 h-56 mt-4 md:mt-0 mr-11" /> {/* Increased image size and added margin-right */}
        </section>


        <section className="text-center">
          <Link to="/createlist">
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
              Create List
            </button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EmailBuilder;









{/*Design Rudraa
    code implementation Rajat

    CREATE GET REQUEST and POST REQUEST Frontend



    validation function -- Rudraa
    state logic to store emails -- Rudraa

    POST REQUEST for addEmails Rudraa


*/}