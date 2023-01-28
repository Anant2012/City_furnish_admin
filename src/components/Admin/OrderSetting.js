import React, { useState } from "react";
import "./Style.css";

function OrderSetting() {
  const [status, setStatus] = useState("");
  const Change = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="font-lora flex justify-center">
      <div className="bg-white flex flex-col w-[50%] mt-20 shadow-xs">
        <div className="bg-baby_blue text-white font-lora text-3xl py-2 px-3 tracking-wide font-semibold ">
          <span className="">Order Setting Form</span>
        </div>
        <div className=" font-lora flex space-x-[13%] items-center mt-4 ml-3 w-full">
          <div className="font-semibold tracking-wide text-lg ">
            Minimum Order Value <span className="spans">*</span>
          </div>
          <input
            type="number"
            required
            className=" w-1/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm"
          ></input>
        </div>
        <div className=" font-lora flex space-x-[30%] items-center mt-4 ml-3">
          <span className="font-semibold tracking-wide text-lg ">Status </span>
          <div className="flex space-x-3 items-center">
            <div className="flex space-x-3 items-center">
              <input type="radio" name="status" id="r1" onChange={Change}></input>
              <label for="r1" className="mt-2">Enable</label>
            </div>
            <div className="flex space-x-3 items-center">
              <input type="radio" name="status" id="r2" onChange={Change}></input>
              <label for="r2" className="mt-2">Disable</label>
            </div>
          </div>
        </div>
        <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700">
          Update
        </button>
      </div>
    </div>
  );
}

export default OrderSetting;
