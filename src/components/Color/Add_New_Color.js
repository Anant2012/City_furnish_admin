import React from "react";
function Add_New_Color() {
  return (
    <div
    className='w-[70%] shadow-sm'
      style={{ margin: "3% auto",background: '#fff' }}
    >
      <div
        // style={{
        //   fontWeight: "bold",
        //   backgroundColor: "lightgray",
        //   border: "1px solid lightgray",
        //   padding: "10px",
        // }}
        className="bg-baby_blue font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider"
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD COLOR</span>
      </div>
      <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          COLOUR NAME <span className="spans">*</span>
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />
        </div>
      <div className="buton">
        <button
          className="w-[20%] ml-[20%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"

        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Add_New_Color;
