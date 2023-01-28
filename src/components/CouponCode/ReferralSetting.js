const ReferralSetting = () => {
  return (
    <div
    className="w-[70%] mx-auto bg-white shadow-sm mt-20 rounded-md"
    >
      <div
        className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden text-xl"
      >
        ☰ <span style={{ marginLeft: "10px" }}>REFERRAL SETTING</span>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          REFERRAL TO AMOUNT <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }}  className="font-lora text-xl font-semibold tracking-wide">
          RERFFERAL OWNER AMOUNT <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          TOTAL QUANTITY <span className="spans">*</span>
        </div>
          <input type="number" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          EXPIRE DAYS <span className="spans">*</span>
        </div>
        <div className="input">
          <input type="text" required></input>
          <span className="font-lora text-sm ml-5">(Days only)</span>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          SOCIAL MEDIA MESSAGE<span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora text-xl font-semibold tracking-wide">
          REFERRAL PAGE CONTENT<span className="spans">*</span>
        </div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="50" />
        </div>
      </div>
      <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Update
        </button>
    </div>
  );
};

export default ReferralSetting;
