import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpPage from './pages/SignUp' 
import { HelmetProvider } from "react-helmet-async";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import EmailBuilder from "./pages/EmailBuilder";
import CreateList from "./pages/CreateList";
function App() {
  return (
    <HelmetProvider>
      <div className="h-full bg-bgWhite">
        <Router>
          <Routes>
            {/* Public route: Home page */}
            <Route path="/" element={<Home/>} />

            {/* Public route: Login and Signup */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpPage />} />
           
            {/* Protected route */}
            <Route
              path="/protected"
              element={
                <SignedIn>
                  {/* Replace this with the component/page for protected content */}
                  <Home/>
                </SignedIn>
              }
            />

            {/* Redirect to login if not signed in */}
            <Route
              path="/protected"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          {/*   <Route
              path="/dashboard"
              element={
                <SignedIn>
                  <Dashboard />
                </SignedIn>
              }
            />

            <Route
              path="/profile"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
 */}

            <Route path="/emailbuilder" element={<EmailBuilder />} />
            <Route path="/createlist" element={<CreateList />} />
    
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
