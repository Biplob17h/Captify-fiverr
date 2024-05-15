/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import us from "../../assets/flags/us.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [showFlags, setShowFlags] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("captify");
    navigate("/login");
    toast.success("logout successful");
  };
  return (
    <div className="w-full h-20 flex justify-between items-center shadow rounded  px-5">
      {/* breadcrumb for navbar */}
      <div className="flex items-center justify-between">
        <div className="cursor-pointer">
          <FaBars color="#460073" />
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 ml-5 pl-5">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex mr-5">
          {/* show langues flags */}
          <div>
            <img
              src={us}
              alt=""
              className="w-7 rounded-full mr-5 cursor-pointer relative"
            />
            <div className="w-16 h-20 border absolute mt-5">

            </div>
          </div>

          <span className="mr-5 cursor-pointer">
            <CiSettings />
          </span>
          <span className="mr-5 cursor-pointer">
            <IoMdNotifications />
          </span>
        </div>

        {/* navbar admin icon */}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-between items-center bg-[#111011] h-full px-5 rounded"
          >
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full shadow-amber-700">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
              </div>
            </div>
            <div className="pl-3">
              <h1 className="text-[16px] font-semibold">Jon doe</h1>
              <h1 className="text-[16px] -mt-3">Admin</h1>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
