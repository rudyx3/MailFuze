import React, { useState , useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import startImg from '../assets/start.png'; // Replace with the correct path for your start image
import axios from 'axios';
import { useUser, useAuth } from '@clerk/clerk-react';

const CreateList = () => {
    const session = useAuth();
    const { user } = useUser();
  const [userName, setUserName] = useState('');
  const [listName, setListName] = useState('');
  const [useSameEmail, setUseSameEmail] = useState(true); // State to track user's email preference
  const [newEmail, setNewEmail] = useState(''); // State to store a new email if entered
  const [lists, setLists] = useState([]);   // State to hold fetched list data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch the lists from the backend API
    const fetchLists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/lists');
        setLists(response.data);  // Set the fetched lists
      } catch (err) {
        setError('Error fetching lists');  // Handle errors
      } finally {
        setLoading(false); // Set loading to false once request is complete
      }
    };

    fetchLists();
  }, []);

  // Render the content conditionally based on loading, error, and data states
/*   if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
 */

  const handleCreateList = async () => {
    if (!user) {
      console.error('No user is logged in.');
      return;
    }
    const token = session.sessionId;
      console.log(token);
    // Determine the email to use
    const email = useSameEmail ? user.primaryEmailAddress.emailAddress : newEmail;

    try {
      const url = 'http://localhost:5000/user/lists'; // Adjust the endpoint as needed
      
      const payload = {
        listName,
        email,
      };

      // Log for debugging
      console.log(`Sending request for list "${listName}" with email: ${payload.email}`);
      
      const response = await axios.post(url, payload ,  {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        }},);
      
      // Log the response
      console.log('Server Response:', response.data);
      
      // Handle the server response here (e.g., display a success message)
    } catch (error) {
      // Handle errors here
      console.error('Error creating list:', error);
    }
  };

  return (
    <>
      <Navbar type="home" userName={userName} />
      <div className="container mx-auto p-6 font-sans">
        {/* Main Section Container */}
        <div className="border border-gray-300 rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Use Available List Section */}
            <div className="flex-1 p-6">
              <h2 className="text-xl font-bold text-purple-700 mb-4">Use Available List</h2>
             <div className="space-y-4">
      {/* If there are no lists, render nothing */}
      {lists.length === 0 ? (
        <p className='text-black'>No lists available.</p>
      ) : (
        // Map over the fetched lists and render them dynamically
        lists.map((list, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-purple-100 p-4 rounded-lg"
          >
            <span className="font-bold text-lg text-black">{list.name}</span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center justify-center bg-white w-8 h-8 rounded-full shadow-md">
                ✉️ {list.emailCount || 0} {/* Display email count if available */}
              </span>
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                Use
              </button>
            </div>
          </div>
        ))
      )}
    </div>

              {/* No Lists Section */}
              <div className="mt-8 flex flex-col items-center">
                <img src={startImg} alt="No lists" className="w-20 mb-2" /> {/* Replace with your actual image */}
                <p className="text-purple-700 text-center text-lg">You have no lists saved, start by creating one!</p>
              </div>
            </div>

            {/* Create New List Section */}
            <div className="flex-1 p-6 border-l border-gray-300">
              <h2 className="text-xl font-bold text-purple-700 mb-4">Create New List</h2>
              <div className="space-y-6">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="List Name"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />

                {/* Email Selection Buttons */}
                <div className="space-y-4">
                  <p className="text-lg text-black">Do you want to use the same email for sending mails?</p>
                  <div className="flex space-x-4">
                    <button
                      className={`px-4 py-2 rounded-lg ${useSameEmail ? 'bg-blue-500' : 'bg-gray-300'} text-white`}
                      onClick={() => setUseSameEmail(true)}
                    >
                      Use Same Email
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg ${!useSameEmail ? 'bg-blue-500' : 'bg-gray-300'} text-white`}
                      onClick={() => setUseSameEmail(false)}
                    >
                      Use Different Email
                    </button>
                  </div>
                </div>

                {/* Email Input if Use Different Email is selected */}
                {!useSameEmail && (
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-4"
                    placeholder="Enter a new email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                )}

                <button
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                  onClick={handleCreateList}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateList;
