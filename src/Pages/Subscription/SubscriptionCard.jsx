/* eslint-disable react/prop-types */
import { CiCirclePlus } from "react-icons/ci";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const SubscriptionCard = ({ show }) => {
  return (
    <div
      className={`ml-10 mt-5 text-[15px] flex ${
        show === "subscription" ? "" : "hidden"
      }`}
    >
      <div className="w-[400px] h-[450px] border border-[#460073] rounded-[8px]">
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Name:</h1>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"Free"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Price:</h1>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"50$"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="mt-5 text-start ml-5">
          <h1 className="text-[17px] font-bold">Plan Features</h1>
        </div>
        <div className="flex justify-start items-center  mt-2 mx-3">
        <FaCheckCircle size={20} className="text-[#460073] mr-2"/>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[370px]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
        <FaCheckCircle size={20} className="text-[#460073] mr-2"/>
        
          <input
            type="text"
            name=""
            id=""
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[370px]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
        <FaCheckCircle size={20} className="text-[#460073] mr-2"/>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[370px]"
          />
        </div>
        <div className="flex justify-end mt-5 mr-5 cursor-pointer ">
          <div className="flex justify-center items-center border border-[#460073] p-2 w-[180px] hover:bg-[#460073] rounded-[5px]">
            <FaPlus /> <span className="ml-4">Add more Features</span>
          </div>
        </div>
        <div className="bg-[#460073] cursor-pointer hover:border hover:bg-black  p-3 mt-[55px] rounded-[5px] w-[360px] mx-auto">
          <h1>Update Pricing</h1>
        </div>
      </div>
      {/* pricing 2 */}
      <div className="w-[400px] h-[450px] border border-[#460073] rounded-[8px] ml-5">
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Name:</h1>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"Basic"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Price:</h1>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"150$"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="mt-5 text-start ml-5">
          <h1 className="text-[17px] font-bold">Plan Features</h1>
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
        <FaCheckCircle size={20} className="text-[#460073] mr-2"/>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[370px]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
        <FaCheckCircle size={20} className="text-[#460073] mr-2"/>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[370px]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
        <FaCheckCircle size={20} className="text-[#460073] mr-2"/>
          <input
            type="text"
            name=""
            id=""
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[370px]"
          />
        </div>
        <div className="flex justify-end mt-5 mr-5 cursor-pointer ">
          <div className="flex justify-center items-center border border-[#460073] p-2 w-[180px] hover:bg-[#460073] rounded-[5px]">
            <FaPlus /> <span className="ml-4">Add more Features</span>
          </div>
        </div>
        <div className="bg-[#460073] cursor-pointer hover:border hover:bg-black  p-3 mt-[55px] rounded-[5px] w-[360px] mx-auto">
          <h1>Update Pricing</h1>
        </div>
      </div>
      <div className=" flex justify-center items-center  w-[200px]">
        <CiCirclePlus size={100} className="cursor-pointer text-[#460073]" />
      </div>
    </div>
  );
};

export default SubscriptionCard;
