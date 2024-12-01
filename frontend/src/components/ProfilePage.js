import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/userdetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 p-6 ">
     
      <div className="relative">
        <img
          src={user.photo}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
      </div>

     
      <div className="text-center mt-4">
        <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>

    
      <div className="mt-6">
        <p
          className="text-lg text-gray-600 bg-gray-100 px-4 py-2 rounded-full shadow-md "
        >
          Currently logged in as <span className="text-blue-600">{user.name}</span>
        </p>
      </div>

{/*      
      <div className="mt-8 text-gray-700">
        <p>
          <strong className="font-semibold">Locale:</strong>{" "}
          {user.locale || "Not specified"}
        </p>
      </div> */}
    </div>
  );
};

export default ProfilePage;