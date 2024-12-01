import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/userdetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        setUser(null);
        navigate("/login");
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
            User Management
          </Link>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/getusers"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Users
            </Link>
            <Link
              to="/profile"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Profile
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <img
                  src={user.photo || "https://via.placeholder.com/40"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-600"
                />
                <span className="text-lg font-medium text-gray-800">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;