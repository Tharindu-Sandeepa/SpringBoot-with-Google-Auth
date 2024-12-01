import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-center items-center text-gray-800">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
          Welcome to User Management
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Seamlessly manage and view users or sign in to explore more features.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl transform -rotate-6 z-0"></div>
        <div className="relative bg-white rounded-3xl shadow-lg p-10 z-10 flex flex-col items-center">
          <div className="mb-8">
            <img
              src="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_account_circle_white_48px.svg"
              alt="User Icon"
              className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2"
            />
          </div>
          <p className="text-xl text-gray-700 text-center mb-8">
            Click below to start managing users or access your account.
          </p>
          <div className="flex gap-6">
            <Link
              to="/getusers"
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              View Users
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-green-500 text-white rounded-full font-medium shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;