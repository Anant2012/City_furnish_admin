const DiscountSetting = () => {
  return (
    <div
      className="w-[70%] mx-auto bg-white shadow-sm mt-20 rounded-md"
    >
      <div
        className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden text-xl"
      >
        ☰ <span style={{ marginLeft: "10px" }}>SI OR CC DISCOUNT SETTING</span>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          DISCOUNT AMOUNT <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          ACTIVE<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="active" id="yes" />
          <label for="yes">Yes</label>
          <input type="radio" name="active" id="no" />
          <label for="no">No</label>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          ENACH MODE<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="enach_mode" id="on" />
          <label for="on">On</label>
          <input type="radio" name="enach_mode" id="off" />
          <label for="offf">Off</label>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">UPDATED ON</div>
        <div className="input font-lora text-xl font-semibold tracking-wide">04/Mar/2020 02:33:27</div>
      </div>
      <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Update
        </button>
    </div>
  );
};

export default DiscountSetting;
