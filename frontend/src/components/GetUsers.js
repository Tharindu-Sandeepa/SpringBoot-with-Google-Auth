import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/getusers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-10 ">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
        Users List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <img
              src={user.photo || "https://via.placeholder.com/100"}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetUsers;