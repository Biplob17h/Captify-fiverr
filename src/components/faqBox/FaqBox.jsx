import "./faqBox.scss";

const FaqBox = () => {
  return (
    <div className="hero   bg-base-200 flex justify-center  items-start ">
      <div className="hero-content flex-col lg:flex-row-reverse w-[1050px] mt-4 ">
        <div className="card shrink-0 w-full border   shadow-2xl bg-[#0F172A]">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Faq question"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <textarea
                type="text"
                placeholder="Faq answer"
                className="input input-bordered h-[200px]"
               
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#460073] text-white">Create new</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaqBox;
