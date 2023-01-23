const AddCouponCode = () => {
  return (
    <div
      style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}
    >
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "10px",
        }}
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD NEW COUPON CODE</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          COUPON CODE <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          MAX NO. OF COUPONS <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          COUPON VALID FROM <span className="spans">*</span>
        </div>
        <div>
          <input type="date" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          COUPON VALID TILL <span className="spans">*</span>
        </div>
        <div>
          <input type="date" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>SELECT A COUPON TYPE</div>
        <div className="input">
          <select>
            <option>None</option>
            <option>Coupon used for category</option>
            <option>Coupon used for Product</option>
          </select>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          DISCOUNT TYPE<span className="spans">*</span>{" "}
        </div>
        <div className="input">
          <input type="radio" name="sms_notification" id="publish" />
          <label for="publish">Flat</label>
          <input type="radio" name="sms_notification" id="unpublish" />
          <label for="unpublish">Percentage</label>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          PRICE VALUE <span className="spans">*</span>
        </div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          DESCRIPTION<span className="spans">*</span>
        </div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="50" />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>MAX AMOUNT FOR</div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>MIN AMOUNT FOR</div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>MAX TENURE PERIOD</div>
        <div className="input">
          <select>
            <option>None</option>
            <option>1 Month</option>
            <option>2 Month</option>
            <option>3 Month</option>
            <option>4 Month</option>
            <option>5 Month</option>
            <option>6 Month</option>
            <option>7 Month</option>
          </select>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>MIN TENURE PERIOD</div>
        <div className="input">
          <select>
            <option>None</option>
            <option>1 Month</option>
            <option>2 Month</option>
            <option>3 Month</option>
            <option>4 Month</option>
            <option>5 Month</option>
            <option>6 Month</option>
            <option>7 Month</option>
          </select>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>MAXIMUM AMOUNT ( TO GIVE )</div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>RECURRING INVOICE TENURE</div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>LABEL AFTER APPLY</div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="60" />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>CITIES</div>
        <div className="input">
          <select>
            <option>Banglore</option>
            <option>Delhi</option>
            <option>Ghaziabad/Noida</option>
            <option>Gurgaon</option>
            <option>Hyderabad</option>
            <option>Mumbain</option>
            <option>Pune</option>
          </select>
        </div>
      </div>
      <div className="buton">
        <button
          style={{
            color: "white",
            backgroundColor: "#1876ba",
            border: "none",
            padding: "6px",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AddCouponCode;
