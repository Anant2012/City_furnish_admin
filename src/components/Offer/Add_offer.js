import React from "react";
function Add_offer() {
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
        ☰ <span style={{ marginLeft: "10px" }}>ADD NEW OFFER</span>
      </div>
      <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          OFFER PRICE TEXT <span className="spans">*</span>
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="15% Discount" />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          OFFER PRICE BELOW TEXT 
          {/* <span className="spans">*</span> */}
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="on your first order" />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          OFFER COUPON CODE
          {/* <span className="spans">*</span> */}
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="SHORT3M" />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          MAX DISCOUNT AMOUNT
          {/* <span className="spans">*</span> */}
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="1200" />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          OFFER DESCRIPTION
          {/* <span className="spans">*</span> */}
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="First Month's rent OFF on furniture and home" />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          OFFER DESCRIPTION
          {/* <span className="spans">*</span> */}
          </div>
          <input type="password" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="First Month's rent OFF on furniture and home" />
        </div>
        <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
          <div className="font-semibold tracking-wide text-lg w-1/3">
          PUBLISH ON WISHLIST PAGE
          {/* <span className="spans">*</span> */}
          </div>
          <input type="checkbox" required className=" w-1/2 rounded-sm py-2 px-3 " />
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

export default Add_offer;
