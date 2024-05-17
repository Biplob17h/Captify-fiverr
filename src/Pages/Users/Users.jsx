/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaEdit, FaUserPlus, FaTrashAlt } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import user1 from "../../assets/users/avatar-1.jpg";
import user2 from "../../assets/users/avatar-2.jpg";
import user3 from "../../assets/users/avatar-3.jpg";
import user4 from "../../assets/users/avatar-4.jpg";

const Users = ({ show }) => {
  // Sample data for users
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

  // Function to toggle user status (active/inactive)
  const toggleUserStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // Function to delete a user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className={`${show === "users" ? "" : "hidden"}  min-h-screen mx-10`}>
      <div className="mx-10 mb-10 flex justify-between items-center">
        <div className="input input-bordered flex items-center gap-2 max-w-[300px]">
          <input type="text" className="grow" placeholder="Search By Name" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <button className="flex items-center border text-[18px] w-[120px] justify-center p-2 rounded-[8px] cursor-pointer border-[#460073] hover:bg-[#460073] hover:border-white">
          <FaUserPlus size={18} className="mr-2" />
          <span>Add User</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Active Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.avatar}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.country}</div>
                    </div>
                  </div>
                </td>
                <td className={`${user.lastActive === 'Active now' ? "text-green-600" : ""}`}>{user.lastActive}</td>
                <td>
                  <div className="flex items-center">
                    {user.active ? (
                      <>
                        <MdVisibility size={18} className="text-green-500 mr-2" />
                        <span className="text-green-500">Active</span>
                      </>
                    ) : (
                      <>
                        <MdVisibilityOff size={18} className="text-red-500 mr-2" />
                        <span className="text-red-500">Inactive</span>
                      </>
                    )}
                    {/* Toggle switch to activate/deactivate user */}
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={user.active}
                        onChange={() => toggleUserStatus(user.id)}
                        className="ml-3"
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="flex items-center">
                    <FaEdit
                      size={18}
                      className="cursor-pointer hover:text-[#460073] mr-2"
                    />
                    <FaTrashAlt
                      size={18}
                      className="cursor-pointer hover:text-[#460073]"
                      onClick={() => deleteUser(user.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
