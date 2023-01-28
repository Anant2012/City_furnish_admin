import React from "react";
import "./Style.css";

function ChangePass() {
  return (
    <div className=" w-full flex justify-center ">
      <div className="bg-white flex flex-col w-[50%] mt-20 shadow-sm">
        <div className="bg-baby_blue text-white font-lora text-3xl py-2 px-3 tracking-wide font-semibold ">
          <span style={{ marginLeft: "10px" }}>CHANGE PASSWORD</span>
        </div>

        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
            CURRENT PASSWORD <span className="spans">*</span>
          </div>
          <input type="password" required className=" w-1/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..."></input>
        </div>

        <div className="font-lora flex space-x-7 items-center mt-4 ml-3">
          <div className="font-semibold tracking-wide text-lg  w-1/3">
            NEW PASSWORD <span className="spans">*</span>
          </div>
          <input type="password" required className=" w-1/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..."></input>
        </div>

        <div className=" font-lora flex space-x-7 items-center mt-4 ml-3">
          <div className="font-semibold tracking-wide text-lg w-1/3">
            RETYPE PASSWORD <span className="spans">*</span>
          </div>
          <input type="password" required className=" w-1/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..."></input>
        </div>
       
          <button
            className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"
          >
            Update Password
          </button>
      </div>
    </div>
  );
}

export default ChangePass;
