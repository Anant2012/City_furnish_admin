import React, { useState } from "react";
// import "./Style.css";
function Content() {
    const [https, setHttps] = useState("");
    const Change = (e) => {
        setHttps(e.target.value);
    };
    return (
        <div >
            <form>
            <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
          COUNTRY NAME <span className="spans">*</span>
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>
                <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
                Iso Code 2 
          {/* <span className="spans">*</span> */}
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>
                <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
                Iso Code 3 
          {/* <span className="spans">*</span> */}
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>

                <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
                Country Shipping Cost
          {/* <span className="spans">*</span> */}
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>


                <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
                Country Tax
          {/* <span className="spans">*</span> */}
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>


                <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
                Country Symbol
          <span className="spans">*</span>
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>

                <div className="font-lora flex  items-center mt-4 ml-3 space-x-7">
                <div className="font-semibold tracking-wide text-lg w-1/3">
                Currency
          <span className="spans">*</span>
          </div>
                    <input type="text" required className=" w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm" placeholder="Write Here ..." />

                </div>

                <button 
        className="w-[20%] ml-[35%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"
        >
            SUBMIT
        </button>
            </form>
        </div>
    );
}

export default Content;
