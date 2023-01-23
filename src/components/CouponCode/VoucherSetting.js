const VoucherSetting = () => {
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
        ☰ <span style={{ marginLeft: "10px" }}>VOUCHER SETTING</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          CLIENT ID <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          KEY <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          REWARD <span className="spans">*</span>
        </div>
        <div>
          <input type="number" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          POST URL <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>RETURN URL</div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          PARTNER CODE<span className="spans">*</span>{" "}
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          VOUCHER TITLE <span className="spans">*</span>
        </div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          VOUCHER LABEL<span className="spans">*</span>
        </div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          STEP DESC<span className="spans">*</span>
        </div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="50" />
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          STATUS<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="status" id="enable" />
          <label for="enable">Enable</label>
          <input type="radio" name="status" id="disable" />
          <label for="disable">Disable</label>
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
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default VoucherSetting;
