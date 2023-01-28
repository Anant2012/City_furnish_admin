import React from "react";
// import "./Style.css";

function Seo() {
    return (
        <div
        >
                  <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          Meta Title 
          {/* <span className="spans">*</span> */}
          </div>
          <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />
        </div>

        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          Meta Keyword 
          {/* <span className="spans">*</span> */}
          </div>
          <textarea type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          Meta Description 
          {/* <span className="spans">*</span> */}
          </div>
          <textarea type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />
        </div>
            <div className="buton">
                <button
        className="w-[20%] ml-[20%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"
        >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Seo;
