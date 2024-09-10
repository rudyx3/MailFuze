import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const EmailBuilder = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <Navbar type="home" userName={userName} />
      <div className="p-6 font-sans">
        {/* Email Builder Section */}
        <section className="mb-10 items-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-4 ">EMAIL BUILDER</h2>
          <p className="text-lg text-black">
            Welcome to the Email Builder. Customize your email messages with dynamic variables and send personalized emails to your list with ease.
          </p>
        </section>

        {/* How it Works Section */}
        <section className="flex items-center mb-10">
          <img src="/path-to-gear-image.png" alt="gears" className="w-24 h-24 mr-6" />
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">See How it Works</h3>
            <p className="text-lg text-black">
              Create a new list, import email data from Excel sheets or add dynamically, draft your content, and hit send. It's that simple!
            </p>
          </div>
        </section>

        {/* Create List Section */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Let's start by creating a new list of emails</h3>
          <p className="text-lg mb-6 text-black">
            Click the button below to create a new list or use an existing one.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
            Create List
          </button>
        </section>
      </div>
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