/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const NavBarProfile = ({ showNav }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("captify");
    navigate("/login");
  };
  return (
    <div
      className={`w-[300px] h-[500px] absolute top-[140%] right-[20%]  z-[99] rounded-[10px] ${
        showNav === "profile" ? "" : "hidden"
      }`}
    >
      <div className="bg-[#263240] h-[60px] flex items-center justify-start rounded-t-[10px]">
        <h1 className="ml-10 text-[16px] font-bold">Profile</h1>
      </div>
      <div className="">
        <div className="bg-[#1b232d]  flex">
          <div className="px-5 pt-3 border-b border-[#460073] pb-2 h-20 w-full flex  items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="ml-8">
              <p className="text-[22px] font-bold">Jon Snow</p>
              <p className="text-[16px] -mt-2">captify admin</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1b232d] h-[250px] rounded-b-[10px]  px-5 py-10">
          <p className="hover:bg-[#460073] p-2 rounded-md cursor-pointer flex items-center">
            <FaUserCircle size={25} />{" "}
            <span className="text-[16px] ml-[10px]">Profile</span>
          </p>
          <p className="hover:bg-[#460073] p-2 rounded-md cursor-pointer flex items-center">
            <IoMail size={20} />{" "}
            <span className="text-[16px] ml-[10px]"> Mail</span>
          </p>
          <p className="hover:bg-[#460073] p-2 rounded-md cursor-pointer flex items-center">
            <FaKey size={20} />{" "}
            <span className="text-[16px] ml-[10px]"> Password</span>
          </p>
          <p
            onClick={() => {
              handleLogout();
            }}
            className="hover:bg-[#460073] p-2 rounded-md cursor-pointer flex items-center"
          >
            <MdLogout size={20} />{" "}
            <span className="text-[16px] ml-[10px]">Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBarProfile;
