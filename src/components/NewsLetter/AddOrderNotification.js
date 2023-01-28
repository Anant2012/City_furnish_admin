import "../Admin/Style.css";

const AddOrderNotification = () => {
  return (
    <div className="w-[100%] h-[100%] flex item-center justify-center">
      <div
      className = "rounded-sm border-1 border-blue-500 m-3 addFilter"
      >
        <div
          className="bg-baby_blue rounded-t-sm font-lora text-basic md:text-2xl py-3 px-2 text-white font-semibold tracking-wider "
        >
          ☰{" "}
          <span style={{ marginLeft: "10px" }}>
            ADD ORDER STATUS NOTIFICATION
          </span>
        </div>
        <div className="pass">
            <div style={{ marginBottom: "1%" }} className = "pass-left">
            ORDER SUB STATUS <span className="spans">*</span>
            </div>
            <div className="pass-right">
              <input type="text" required className=" w-1/5 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"></input>
            </div>
          </div>
        <div className="pass">
            <div style={{ marginBottom: "1%" }} className = "pass-left">
            SENDER EMAIL ADDRESS <span className="spans">*</span>
            </div>
            <div className="pass-right">
              <input type="text" required className=" w-1/5 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"></input>
            </div>
          </div>
        <div className="pass">
            <div style={{ marginBottom: "1%" }} className = "pass-left">
            ORDER STATUS <span className="spans">*</span>
            </div>
            <div className="pass-right">
              <input type="text" required className=" w-1/5 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"></input>
            </div>
          </div>
        <div className="pass">
            <div style={{ marginBottom: "1%" }} className = "pass-left">
            SMS DESCRIPTION <span className="spans">*</span>
            </div>
            <div className="pass-right">
              <input type="text" required className=" w-1/5 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"></input>
            </div>
          </div>
        <div className="pass">
            <div style={{ marginBottom: "1%" }} className = "pass-left">
            EMAIL DESCRIPTION <span className="spans">*</span>
            </div>
            <div className="pass-right">
              <input type="text" required className=" w-1/5 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"></input>
            </div>
          </div>

        {/* <div className="pass">
          <div style={{ marginBottom: "1%" }}>
            ORDER STATUS <span className="spans">*</span>
          </div>
          <div>
            <input type="text" required className="input"></input>
          </div>
        </div> */}
        {/* <div className="pass">
          <div style={{ marginBottom: "1%" }}>
            ORDER SUB STATUS <span className="spans">*</span>
          </div>
          <div>
            <input type="text" required className="input"></input>
          </div>
        </div> */}
        {/* <div className="pass">
          <div style={{ marginBottom: "1%" }}>
            SENDER EMAIL ADDRESS <span className="spans">*</span>
          </div>
          <div>
            <input type="text" required className="input"></input>
          </div>
        </div> */}
        {/* <div className="pass">
          <div style={{ marginBottom: "1%" }}>SMS DESCRIPTION</div>
          <div>
            <input type="text" className="input"></input>
          </div>
        </div> */}
        {/* <div className="pass">
          <div style={{ marginBottom: "1%" }}>EMAIL DESCRIPTION</div>
          <div>
            <input type="text" className="input"></input>
          </div>
        </div> */}
        {/* <div className="pass">
          <div style={{ marginBottom: "1%" }}>SMS NOTIFICATION</div>
          <div className="input">
            <div>

              <input type="radio" name="sms_notification" id="publish" />
              <label for="publish">Publish</label>
            </div>
            <div>
            <input type="radio" name="sms_notification" id="unpublish" />
            <label for="unpublish">Unpublish</label>
            </div>
          </div>
        </div> */}
        <div className="pass">
          <div className="pass-left">SMS NOTIFICATION</div>
          <div className="pass-right">
            <div>
              <input type="radio" name="sms_notification" id="publish" style={{width:"30%"}}/>
              <label for="publish">Publish</label>
            </div>
            <div >
              <input type="radio" name="sms_notification" id="unpublish" style={{width:"30%"}}/>
              <label for="unpublish">Unpublish</label>
            </div>
          </div>
        </div>
        <div className="pass">
          <div className="pass-left">EMAIL NOTIFICATION</div>
          <div className="pass-right">
            <div>
              <input type="radio" name="sms_notification" id="publish" style={{width:"30%"}}/>
              <label for="publish">Publish</label>
            </div>
            <div >
              <input type="radio" name="sms_notification" id="unpublish" style={{width:"30%"}}/>
              <label for="unpublish">Unpublish</label>
            </div>
          </div>
        </div>
        <div className="buton">
          <button
            className="w-1/2 ml-[32%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOrderNotification;
