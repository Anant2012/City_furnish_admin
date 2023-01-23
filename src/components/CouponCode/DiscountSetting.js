const DiscountSetting = () => {
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
        ☰ <span style={{ marginLeft: "10px" }}>SI OR CC DISCOUNT SETTING</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          DISCOUNT AMOUNT <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          ACTIVE<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="active" id="yes" />
          <label for="yes">Yes</label>
          <input type="radio" name="active" id="no" />
          <label for="no">No</label>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          ENACH MODE<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="enach_mode" id="on" />
          <label for="on">On</label>
          <input type="radio" name="enach_mode" id="off" />
          <label for="offf">Off</label>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>UPDATED ON</div>
        <div className="input">04/Mar/2020 02:33:27</div>
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
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default DiscountSetting;
