/* eslint-disable react/prop-types */
import { CiCirclePlus } from "react-icons/ci";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const SubscriptionCard = ({ show }) => {
  return (
    <div
      className={`ml-10 mt-5 text-[15px] flex flex-wrap ${
        show === "subscription" ? "" : "hidden"
      }`}
    >
      <div className="w-full md:w-[400px] h-[450px] border border-[#460073] rounded-[8px] mb-16 sm:md-5 md:mb-5 lg:mb-0 mr-10 md:mr-0">
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Name:</h1>
          <input
            type="text"
            defaultValue={"Free"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Price:</h1>
          <input
            type="text"
            defaultValue={"50$"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="mt-5 text-start ml-5">
          <h1 className="text-[17px] font-bold">Plan Features</h1>
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
          <FaCheckCircle size={20} className="text-[#460073] mr-2" />
          <input
            type="text"
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[calc(100%-24px)]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
          <FaCheckCircle size={20} className="text-[#460073] mr-2" />
          <input
            type="text"
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[calc(100%-24px)]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
          <FaCheckCircle size={20} className="text-[#460073] mr-2" />
          <input
            type="text"
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[calc(100%-24px)]"
          />
        </div>
        <div className="flex justify-end mt-5 mr-5 cursor-pointer">
          <div className="flex justify-center items-center border border-[#460073] p-2 w-[180px] hover:bg-[#460073] rounded-[5px]">
            <FaPlus /> <span className="ml-4">Add more Features</span>
          </div>
        </div>
        <div className="customBtn1 mt-[12%] mx-7">
          <h1 className="text-center">Update Pricing</h1>
        </div>
      </div>

      <div className="w-full md:w-[400px] h-[450px] border border-[#460073] rounded-[8px] mb-5 md:mb-0 md:ml-5 mr-10 md:mr-0">
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Name:</h1>
          <input
            type="text"
            defaultValue={"Basic"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-[15px] pr-3">Plan Price:</h1>
          <input
            type="text"
            defaultValue={"150$"}
            className="rounded text-[15px] px-3"
          />
        </div>
        <div className="mt-5 text-start ml-5">
          <h1 className="text-[17px] font-bold">Plan Features</h1>
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
          <FaCheckCircle size={20} className="text-[#460073] mr-2" />
          <input
            type="text"
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[calc(100%-24px)]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
          <FaCheckCircle size={20} className="text-[#460073] mr-2" />
          <input
            type="text"
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[calc(100%-24px)]"
          />
        </div>
        <div className="flex justify-start items-center mt-2 mx-3">
          <FaCheckCircle size={20} className="text-[#460073] mr-2" />
          <input
            type="text"
            defaultValue={"300 monthly transcription minutes"}
            className="rounded text-[15px] px-3 w-[calc(100%-24px)]"
          />
        </div>
        <div className="flex justify-end mt-5 mr-5 cursor-pointer">
          <div className="flex justify-center items-center border border-[#460073] p-2 w-[180px] hover:bg-[#460073] rounded-[5px]">
            <FaPlus /> <span className="ml-4">Add more Features</span>
          </div>
        </div>
        <div className="customBtn1 mt-[12%] mx-7">
          <h1 className="text-center">Update Pricing</h1>
        </div>
      </div>

      <div className="w-full md:w-[200px] flex justify-center items-center mt-5 md:mt-0 mr-12 md:mr-0">
        <CiCirclePlus size={100} className="cursor-pointer text-[#460073] hover:text-[#a100ff]" />
      </div>
    </div>
  );
};

export default SubscriptionCard;
