/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import us from "../../assets/flags/us.svg";
import NavBarProfile from "./NavBarProfile";
import NavBarNotifications from "./NavBarNotifications";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(null);
  console.log(showNav);

  return (
    <div className="w-full h-20 flex justify-between items-center shadow rounded  px-5">
      {/* big screen breadcrumb */}
      <div className=" items-center justify-between flex">
        <div className="cursor-pointer hidden md:block">
          <FaBars color="#460073" />
        </div>
        <div>
          {/* small screen breadcrumb */}
          <div className="flex justify-start w-full md:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 ml-5 pl-5">
            <input type="text" className="grow" placeholder="Search" />
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
          </label>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex mr-5 relative">
          <span
            onClick={() => {
              showNav === "setting" ? setShowNav(null) : setShowNav("setting");
            }}
            className="mr-5 cursor-pointer"
          >
            <CiSettings />
          </span>
          <div className="flex">
            <span
              onClick={() => {
                showNav === "notifications"
                  ? setShowNav(null)
                  : setShowNav("notifications");
              }}
              className=" cursor-pointer"
            >
              <IoMdNotifications className=""/>
            </span>
            <div className="absolute top-[190%] right-[518%]">
              <NavBarNotifications showNav={showNav}/>
            </div>
          </div>
        </div>

        {/* navbar admin icon */}
        <div
          onClick={() => {
            showNav === "profile" ? setShowNav(null) : setShowNav("profile");
          }}
          className="flex justify-between items-center h-full rounded relative"
        >
          <div className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full shadow-amber-700 ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
          </div>
          <div>
            <NavBarProfile showNav={showNav}></NavBarProfile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
