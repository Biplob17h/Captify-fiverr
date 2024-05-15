/* eslint-disable no-unused-vars */
import { FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import { useState } from "react";
import Users from "../Users/Users";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [show, setShow] = useState("home");

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
        <Navbar></Navbar>
        {/* Page content here */}
        <div className="w-full min-h-screen text-center mt-[20%]">
          <HomePage show={show}></HomePage>
          <Users show={show}></Users>
        </div>

        {/* small screen breadcrumb */}
        <div className="md:hidden flex justify-start w-full">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4  min-h-full text-base-content w-60 md:w-80 bg-[#0f172a]">
          {/* Sidebar content here */}
          <Link onClick={()=>{setShow('home')}}>
            <h1 className="text-2xl font-bold text-center mt-3">Captify Admin</h1>
            <h1 className="mt-12 mb-5">Pages</h1>
          </Link>
          <li
            onClick={() => {
              setShow("home");
            }}
            className="text-[15px] hover:bg-[#460073] rounded"
          >
            <Link>
              <span>
                <FaHome />
              </span>{" "}
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setShow("users");
            }}
            className="text-[15px] hover:bg-[#460073] rounded mt-2"
          >
            <Link>
              <span>
                <FaUsers />
              </span>
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
