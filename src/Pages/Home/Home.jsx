/* eslint-disable no-unused-vars */
import { FaHome, FaUsers, FaCrown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import { useState } from "react";
import Users from "../Users/Users";
import Navbar from "../Navbar/Navbar";
import SubscriptionCard from "../Subscription/SubscriptionCard";
import Subscriber from "../Subscription/Subscriber";
import { IoTicketSharp } from "react-icons/io5";
import { BsChatRightDots } from "react-icons/bs";
import LiveChat from "../LiveChat/LiveChat";
import Tickets from "../Tickets/Tickets";
import Faq from "../Faq/Faq";
import { FaQ } from "react-icons/fa6";

const Home = () => {
  const [show, setShow] = useState("home");
  const [hideNav, setHideNav] = useState(false);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Navbar setHideNav={setHideNav} hideNav={hideNav}></Navbar>
        {/* Page content here */}
        <div className="w-full min-h-screen text-center">
          <HomePage show={show}></HomePage>
          <Users show={show}></Users>
          <SubscriptionCard show={show}></SubscriptionCard>
          <Subscriber show={show}></Subscriber>
          <LiveChat show={show}></LiveChat>
          <Tickets show={show}></Tickets>
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
         
          className={`menu p-4  min-h-full text-base-content w-60 bg-[#0f172a] ${
            hideNav ? "hidden transition duration-500 ease-in " : ""
          }`}
        
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
            className={`text-[15px] hover:bg-[#460073] hover:text-white rounded mt-2 ${
              show === "home" ? "bg-[#460073] text-white" : "bg-[#0f172a]"
            }`}
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
            className={`text-[15px] hover:bg-[#460073] hover:text-white rounded mt-2 ${
              show === "users" ? "bg-[#460073] text-white" : "bg-[#0f172a]"
            }`}
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
              setShow("subscription");
            }}
            className={`text-[15px] hover:bg-[#460073] hover:text-white rounded mt-2 ${
              show === "subscription" ? "bg-[#460073] text-white" : "bg-[#0f172a]"
            }`}
          >
            <Link>
              <span>
                <FaCrown />
              </span>
              Subscription
            </Link>
          </li>
          <li
            onClick={() => {
              setShow("Subscriber");
            }}
            className={`text-[15px] hover:bg-[#460073] hover:text-white rounded mt-2 ${
              show === "Subscriber" ? "bg-[#460073] hover:text-white" : "bg-[#0f172a]"
            }`}
          >
            <Link>
              <span>
                <FaUser />
              </span>
              Subscriber
            </Link>
          </li>
          <li
            onClick={() => {
              setShow("tickets");
            }}
            className={`text-[15px] hover:bg-[#460073] hover:text-white rounded mt-2 ${
              show === "tickets" ? "bg-[#460073] hover:text-white" : "bg-[#0f172a]"
            }`}
          >
            <Link>
              <span>
                <IoTicketSharp /> 
              </span>
              Tickets
            </Link>
          </li>
          <li
            onClick={() => {
              setShow("liveChat");
            }}
            className={`text-[15px] hover:bg-[#460073] hover:text-white rounded mt-2 ${
              show === "liveChat" ? "bg-[#460073] hover:text-white" : "bg-[#0f172a]"
            }`}
          >
            <Link>
              <span>
                <BsChatRightDots /> 
              </span>
              Live Chat
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
