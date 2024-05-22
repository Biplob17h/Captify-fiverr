/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import user1 from "../../assets/users/avatar-1.jpg";
import user2 from "../../assets/users/avatar-2.jpg";
import user3 from "../../assets/users/avatar-3.jpg";
import user4 from "../../assets/users/avatar-4.jpg";

const LiveChatList = ({ show, setShow }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Hart Hagerty",
      country: "United States",
      active: true,
      lastActive: "30 min ago",
      avatar: user1,
    },
    {
      id: 2,
      name: "Brice Swyre",
      country: "China",
      active: true,
      lastActive: "Active now",
      avatar: user2,
    },
    {
      id: 3,
      name: "Marjy Ferencz",
      country: "Russia",
      active: true,
      lastActive: "Active now",
      avatar: user3,
    },
    {
      id: 4,
      name: "Yancy Tear",
      country: "Brazil",
      active: false,
      lastActive: "2 days ago",
      avatar: user4,
    },
  ]);

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-6 text-[16px] ${
        show === "liveChatList" ? "" : "hidden"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Live Chat Users</h1>
      {/* Table for larger screens */}
      <div className="hidden lg:block">
        <table className="min-w-full bg-gray-800 text-white rounded-md">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-3 px-4">Avatar</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Country</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Last Active</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="py-3 px-4">
                  <img
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.country}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold ${
                      user.active ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 px-4">{user.lastActive}</td>
                <td className="py-3 px-4">
                  <button
                    className="bg-blue-600 p-2 rounded-md hover:bg-blue-700"
                    onClick={() => {
                      setShow("liveChat");
                    }}
                  >
                    Live Chat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Divs for smaller screens */}
      <div className="block lg:hidden">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-800 rounded-md shadow-md mb-4 p-4">
            <div className="flex items-center mb-4">
              <img
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.country}</p>
              </div>
            </div>
            <p className="mb-2">
              <span className={`font-semibold ${user.active ? "text-green-500" : "text-red-500"}`}>
                {user.active ? "Active" : "Inactive"}
              </span>
            </p>
            <p className="mb-2 text-gray-400">Last Active: {user.lastActive}</p>
            <button
              className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 w-full"
              onClick={() => {
                setShow("liveChat");
              }}
            >
              Live Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveChatList;
