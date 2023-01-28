import React from "react";
import "./Style.css";
function Mailchimp() {
  return (
    <div
      style={{ margin: "3%", borderRadius: "7px" }}
      className="bg-white mx-auto w-[50%] shadow-sm rounded-tl-md rounded-tr-md overflow-hidden "
    >
      <div className="bg-baby_blue font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider">
        ☰ <span style={{ marginLeft: "10px" }}>MAILCHIMP SETTINGS</span>
      </div>
      <div className="pl-4 pt-2 mb-3 mt-4 flex space-x-[10%]">
        <div
          style={{ marginBottom: "1%" }}
          className="font-semibold tracking-wide text-xl font-lora"
        >
          API KEY
        </div>
        <input type="text" required className="input"></input>
      </div>
      <div className="pl-4 pt-2 mb-3 flex space-x-[10%]">
        <div
          style={{ marginBottom: "1%" }}
          className="font-semibold tracking-wide text-xl font-lora"
        >
          LIST ID
        </div>
        <input type="text" required className="input font-lora" />
      </div>
      <div className="pl-4 pt-2 mb-3 flex space-x-[9%]">
        <div
          style={{ marginBottom: "1%" }}
          className="font-semibold tracking-wide text-lg font-lora"
        >
          STATUS
        </div>
        <div className="input">
          <span className="forms">
            <input className="form-check-input font-lora" type="radio" />
            Yes
          </span>
          <span className="forms">
            <input className="form-check-input font-lora" type="radio" />
            No
          </span>
        </div>
      </div>
      <div className="buton">
        <button className="w-[20%] ml-[20%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700">
          SAVE
        </button>
      </div>
    </div>
  );
}

export default Mailchimp;
