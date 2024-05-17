/* eslint-disable no-unused-vars */
import { FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import { useState } from "react";
import Users from "../Users/Users";
import Navbar from "../Navbar/Navbar";
import Faq from "../Faq/Faq";
import { FaQ } from "react-icons/fa6";

const Home = () => {
  const [show, setShow] = useState("home");

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Navbar></Navbar>
        {/* Page content here */}
        <div className="w-full min-h-screen text-center ">
          <HomePage show={show}></HomePage>
          <Users show={show}></Users>
          <Faq show={show}></Faq>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className={`menu p-4  min-h-full text-base-content w-60 bg-[#0f172a]`}
        >
          {/* Sidebar content here */}
          <Link
            onClick={() => {
              setShow("home");
            }}
          >
            <h1 className="text-2xl font-bold text-center mt-3">
              Captify Admin
            </h1>
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
              <span>Home</span>
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

          <li
            onClick={() => {
              setShow("faq");
            }}
            className="text-[15px] hover:bg-[#460073] rounded mt-2"
          >
            <Link>
              <span>
              <FaQ />
              </span>
              Faq
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Home;
