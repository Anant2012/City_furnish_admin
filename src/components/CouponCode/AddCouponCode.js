const AddCouponCode = () => {
  return (
    <div
     className="w-[70%] mx-auto bg-white shadow-sm mt-20 rounded-md"
    >
      <div
        className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden text-xl "
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD NEW COUPON CODE</span>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          COUPON CODE <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          MAX NO. OF COUPONS <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          COUPON VALID FROM <span className="spans">*</span>
        </div>
          <input type="date" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          COUPON VALID TILL <span className="spans">*</span>
        </div>
          <input type="date" required className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">SELECT A COUPON TYPE</div>
        <div className="input">
          <select>
            <option className="font-lora font-semibold tracking-wide text-lg ">None</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Coupon used for category</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Coupon used for Product</option>
          </select>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          DISCOUNT TYPE<span className="spans">*</span>{" "}
        </div>
        <div className="input">
          <input type="radio" name="sms_notification" id="publish" />
          <label for="publish" className="font-lora font-semibold tracking-wide text-lg ">Flat</label>
          <input type="radio" name="sms_notification" id="unpublish" />
          <label for="unpublish" className="font-lora font-semibold tracking-wide text-lg ">Percentage</label>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          PRICE VALUE <span className="spans">*</span>
        </div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">
          DESCRIPTION<span className="spans">*</span>
        </div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="50" />
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">MAX AMOUNT FOR</div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">MIN AMOUNT FOR</div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">MAX TENURE PERIOD</div>
        <div className="input">
          <select>
            <option className="font-lora font-semibold tracking-wide text-lg ">None</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">1 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">2 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">3 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">4 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">5 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">6 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">7 Month</option>
          </select>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">MIN TENURE PERIOD</div>
        <div className="input">
          <select>
            <option className="font-lora font-semibold tracking-wide text-lg ">None</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">1 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">2 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">3 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">4 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">5 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">6 Month</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">7 Month</option>
          </select>
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">MAXIMUM AMOUNT ( TO GIVE )</div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">RECURRING INVOICE TENURE</div>
          <input type="text" className="input"></input>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">LABEL AFTER APPLY</div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="60" />
        </div>
      </div>
      <div className="pass flex space-x-[18%]">
        <div style={{ marginBottom: "1%" }} className="font-lora font-semibold tracking-wide text-lg ">CITIES</div>
        <div className="input">
          <select>
            <option className="font-lora font-semibold tracking-wide text-lg ">Banglore</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Delhi</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Ghaziabad/Noida</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Gurgaon</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Hyderabad</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Mumbain</option>
            <option className="font-lora font-semibold tracking-wide text-lg ">Pune</option>
          </select>
        </div>
      </div>
      <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Submit
        </button>
    </div>
  );
};

export default AddCouponCode;
