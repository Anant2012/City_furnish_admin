const VoucherSetting = () => {
  return (
    <div
    className="w-[50%] mx-auto bg-white shadow-sm mt-20 rounded-md"
    >
      <div
        className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden text-xl"
      >
        ☰ <span style={{ marginLeft: "10px" }}>VOUCHER SETTING</span>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          CLIENT ID <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          KEY <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          REWARD <span className="spans">*</span>
        </div>
          <input type="number" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          POST URL <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">RETURN URL</div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          PARTNER CODE<span className="spans">*</span>{" "}
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          VOUCHER TITLE <span className="spans">*</span>
        </div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          VOUCHER LABEL<span className="spans">*</span>
        </div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          STEP DESC<span className="spans">*</span>
        </div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="50" />
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          STATUS<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="status" id="enable" />
          <label for="enable" className="font-lora font-semibold tracking-wide text-lg ">Enable</label>
          <input type="radio" name="status" id="disable" />
          <label for="disable" className="font-lora font-semibold tracking-wide text-lg ">Disable</label>
        </div>
      </div>
      <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Update
        </button>
    </div>
  );
};

export default VoucherSetting;
