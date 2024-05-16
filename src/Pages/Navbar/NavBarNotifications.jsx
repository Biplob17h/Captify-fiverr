/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import bell from "../../assets/svg/bell.svg";
import user1 from "../../assets/users/avatar-2.jpg";
import user2 from "../../assets/users/avatar-1.jpg";
import user3 from "../../assets/users/avatar-3.jpg";
import user4 from "../../assets/users/avatar-4.jpg";
import { FaRegClock } from "react-icons/fa";

const NavBarNotifications = ({ showNav }) => {
  const [show, setShow] = useState("all");
  return (
    <div
      className={`w-[350px]  rounded-[8px]
               h-[450px] border  absolute   ${
                 showNav === "notifications" ? "" : "hidden"
               }`}
    >
      <div className="bg-[#460073] w-[350px] h-[100px]  relative rounded-t-[8px]">
        <h1 className="text-[18px] font-semibold pl-5 pt-3">Notifications</h1>
        <div className="flex absolute top-[60%] left-[7.5%]">
          <h1
            onClick={() => {
              setShow("all");
            }}
            className={`text-[16px]  w-[100px] text-center h-[40px] flex items-center justify-center  rounded-t-[5px] cursor-pointer  ${
              show === "all"
                ? "bg-[#292e33] text-[white]"
                : "bg-[#460073] text-[#a9b1ca] hover:text-white"
            }`}
          >
            All (4)
          </h1>
          <h1
            onClick={() => {
              setShow("message");
            }}
            className={`text-[16px]  w-[100px] text-center h-[40px] flex items-center justify-center  rounded-t-[5px] cursor-pointer  ${
              show === "message"
                ? "bg-[#292e33] text-[white]"
                : "bg-[#460073] text-[#a9b1ca] hover:text-white"
            }`}
          >
            Message (3)
          </h1>
          <h1
            onClick={() => {
              setShow("alerts");
            }}
            className={`text-[16px]  w-[100px] text-center h-[40px] flex items-center justify-center  rounded-t-[5px] cursor-pointer  ${
              show === "alerts"
                ? "bg-[#292e33] text-[white]"
                : "bg-[#460073] text-[#a9b1ca] hover:text-white"
            }`}
          >
            Alerts
          </h1>
        </div>
      </div>
      <div className=" w-full h-[350px] rounded-b-[8px] bg-[#292e33] overflow-scroll no-scrollbar">
        {/* all section */}
        <div className={`${show === "all" ? "" : "hidden"} py-5`}>
          {/* message start */}
          <div className="flex h-[120px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user1} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">James righton</h1>
                <h1>We talk about a project in Linkedin</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">30 min ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* message start */}
          <div className="flex h-[120px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user2} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">Nikki Bella</h1>
                <h1>{`Answered your comment on Facebook`}</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">50 min ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* message start */}
          <div className="flex h-[120px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user3} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">Alex Aster</h1>
                <h1>mention you in his comment on Instagram</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">2 hrs ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* message start */}
          <div className="flex h-[100px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user4} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">Mark Twain</h1>
                <h1>We talk about a project in Linkedin</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">2 days ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        {/* message section */}
        <div className={`${show === "message" ? "" : "hidden"} py-5`}>
          {/* message start */}
          <div className="flex h-[100px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user4} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">Mark Twain</h1>
                <h1>We talk about a project in Linkedin</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">2 days ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* message start */}
          <div className="flex h-[120px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user3} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">Alex Aster</h1>
                <h1>mention you in his comment on Instagram</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">2 hrs ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* message start */}
          <div className="flex h-[120px] hover:bg-[#383f46] mx-2 py-2 cursor-pointer rounded-[8px]">
            <div className="p-3 flex">
              <img className="w-8 h-8 rounded-full mt-1" src={user2} alt="" />
              <div className="text-[14px] px-5 leading-[20px]">
                <h1 className="font-bold">Nikki Bella</h1>
                <h1>{`Answered your comment on Facebook`}</h1>
                <div className="pt-2 flex items-center text-[14px]">
                  <FaRegClock size={14} />
                  <span className="text-[14px] ml-2">50 min ago</span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        {/* alert section */}
        <div className={`${show === "alerts" ? "" : "hidden"}`}>
          <img className="w-28 mx-auto pt-[15%]" src={bell} alt="" />
          <h1 className="text-[22px] text-center">
            Hey! You don&rsquo;t have any notifications
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBarNotifications;
