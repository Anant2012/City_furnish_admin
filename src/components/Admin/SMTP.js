import React from "react";
import "./Style.css";
function SMTP() {
  return (
    <div
      style={{ margin: "3%", borderRadius: "7px" }}
      className="w-[50%] mx-auto bg-white shadow-sm rounded-tr-sm rounded-tl-sm overflow-hidden"
    >
      <div className="w-full bg-baby_blue font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider"
      >
        ☰ <span style={{ marginLeft: "10px" }}>SMTP SETTINGS</span>
      </div>
      <div className="w-full  flex space-x-[15%] pl-4 pt-2 mb-3">
        <div style={{ marginBottom: "1%" }} className="  font-semibold tracking-wide text-xl font-lora text-gray-900">
          SMTP HOST
        </div>
          <input type="text" required className="input  bg-slate-50 rounded-sm py-2 px-3 shadow-sm" />
      </div>
      <div className="pl-4 pt-2 flex space-x-[15%] mb-3">
        <div style={{ marginBottom: "1%" }} className="font-semibold tracking-wide text-lg font-lora">
          SMTP PORT
        </div>
          <input type="number" required className="input"></input>
      </div>
      <div className=" flex space-x-[15%] pl-4 pt-2 mb-3">
        <div style={{ marginBottom: "1%" }} className="font-semibold tracking-wide text-lg font-lora">
          SMTP EMAIL
        </div>
          <input type="email" className="input" required></input>
      </div>
      <div className="pl-4 pt-2 flex space-x-[15%] mb-3">
        <div style={{ marginBottom: "1%" }} className="text-gray-9000 font-semibold tracking-wide text-lg font-lora tetx">
          SMTP PASSWORD
        </div>
          <input type="password" required className="input"></input>
      </div>
      <div className="buton">
      <button className="w-[20%] ml-[20%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"
        >
          SAVE
        </button>
      </div>
    </div>
  );
}

export default SMTP;
