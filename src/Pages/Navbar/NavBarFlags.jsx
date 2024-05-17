/* eslint-disable react/prop-types */
import us from "../../assets/flags/us.svg";
import spain from "../../assets/flags/spain.svg";
import french from "../../assets/flags/french.svg";
import german from "../../assets/flags/germany.svg";
import italy from "../../assets/flags/italy.svg";

const NavBarFlags = ({ showNav }) => {
  return (
    <div
      className={`w-[160px] h-[263px] absolute top-[200%] right-[75%] z-[999] bg-[#292e33] rounded-[8px] ${
        showNav === "flags" ? "" : "hidden"
      }`}
    >
      <div
        className="mt-3 py-2 px-3 flex hover:bg-[#394047] tooltip"
        data-tip="English"
      >
        <img className="rounded-full w-[18px]" src={us} alt="" />
        <h1 className="text-[14px] ml-4">English</h1>
      </div>
      <div
        className=" py-2 px-3 flex hover:bg-[#394047] tooltip"
        data-tip="Spanish"
      >
        <img className="rounded-full w-[18px]" src={spain} alt="" />
        <h1 className="text-[14px] ml-4">Español</h1>
      </div>
      <div
        className=" py-2 px-3 flex hover:bg-[#394047] tooltip"
        data-tip="German"
      >
        <img className="rounded-full w-[18px]" src={german} alt="" />
        <h1 className="text-[14px] ml-4">Deutsche</h1>
      </div>
      <div
        className=" py-2 px-3 flex hover:bg-[#394047] tooltip"
        data-tip="Italian"
      >
        <img className="rounded-full w-[18px]" src={italy} alt="" />
        <h1 className="text-[14px] ml-4">Italiana</h1>
      </div>
      <div
        className=" py-2 px-3 flex hover:bg-[#394047] tooltip"
        data-tip="French"
      >
        <img className="rounded-full w-[18px]" src={french} alt="" />
        <h1 className="text-[14px] ml-4">Francais</h1>
      </div>
    </div>
  );
};

export default NavBarFlags;
