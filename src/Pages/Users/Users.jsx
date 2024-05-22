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

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    country: "",
    active: false,
    avatar: user1, // Default avatar, you can change this logic
  });

  const toggleUserStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div
      className={`${
        show === "users" ? "" : "hidden"
      } bg-black min-h-screen p-10 text-[16px] `}
    >
      {/* for small screen */}
      <div className="block md:hidden">
        <div className="mx-10 mb-10">
          <div className="input input-bordered flex items-center gap-2 max-w-[300px] mb-5">
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
          <button
            className="customBtn1 flex items-center"
            onClick={() => setShowModal(true)}
          >
            <FaUserPlus size={18} className="mr-2" />
            <span>Add User</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:hidden">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 rounded-lg p-5 text-white shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={user.avatar}
                  alt={`${user.name}'s avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm opacity-75">{user.country}</p>
                </div>
              </div>
              <p className="mb-2">
                Status:{" "}
                <span
                  className={`font-bold ${
                    user.active ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </p>
              <p className="mb-4">Last Active: {user.lastActive}</p>
              <div className="flex justify-between">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => toggleUserStatus(user.id)}
                >
                  {user.active ? (
                    <MdVisibilityOff size={20} />
                  ) : (
                    <MdVisibility size={20} />
                  )}
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => deleteUser(user.id)}
                >
                  <FaTrashAlt size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* for big screen */}
      <div className="hidden md:block">
        <div className="mx-10 mb-10 flex justify-between items-center ">
          <div className="input input-bordered flex items-center gap-2 max-w-[300px] ">
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
          <button
            className="customBtn1 flex items-center"
            onClick={() => setShowModal(true)}
          >
            <FaUserPlus size={18} className="mr-2" />
            <span>Add User</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
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
                  <td
                    className={`${
                      user.lastActive === "Active now" ? "text-green-600" : ""
                    }`}
                  >
                    {user.lastActive}
                  </td>
                  <td>
                    <div className="flex items-center">
                      {user.active ? (
                        <>
                          <MdVisibility
                            size={18}
                            className="text-green-500 mr-2"
                          />
                          <span className="text-green-500">Active</span>
                        </>
                      ) : (
                        <>
                          <MdVisibilityOff
                            size={18}
                            className="text-red-500 mr-2"
                          />
                          <span className="text-red-500">Inactive</span>
                        </>
                      )}
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 text-white">
          <div className="bg-black text-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl mb-4">Add New User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="first"
                  name="firstName"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last"
                  name="firstName"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2" htmlFor="name">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Status</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="active"
                      value={true}
                      checked={newUser.active === true}
                      onChange={(e) =>
                        setNewUser({
                          ...newUser,
                          active: e.target.value === "true",
                        })
                      }
                    />
                    Active
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="active"
                      value={false}
                      checked={newUser.active === false}
                      onChange={(e) =>
                        setNewUser({
                          ...newUser,
                          active: e.target.value === "false",
                        })
                      }
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#460073] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
