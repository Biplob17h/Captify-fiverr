/* eslint-disable react/prop-types */
import FaqBox from "../../components/faqBox/FaqBox";
import "./faq.scss";

const Faq = ({ show }) => {
  return (
    <div className={`${show === "faq" ? "" : "hidden"}`}>
      <FaqBox />
      <div className="bg-[#191e24] px-20 pb-32">
        <div className="flex flex-col items-start pt-[30px]">
          <h3 className="text-3xl ">1. What is your hobby?</h3>
          <p className="text-base font-thin mt-[20px] items-start text-left">
            <span className="text-lg font-bold">Ans :</span> It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content , making it look
            like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for lorem will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>

        <div className="flex flex-col items-start mt-[30px]">
          <h3 className="text-3xl ">1. What is your hobby?</h3>
          <p className="text-base font-thin mt-[20px] items-start text-left">
            <span className="text-lg font-bold">Ans :</span> It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content , making it look
            like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for lorem will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
        </div>
        

      </div>
    </div>
  );
};

export default Faq;
