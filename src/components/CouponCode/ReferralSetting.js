const ReferralSetting = () => {
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
        ☰ <span style={{ marginLeft: "10px" }}>REFERRAL SETTING</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          REFERRAL TO AMOUNT <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          RERFFERAL OWNER AMOUNT <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          TOTAL QUANTITY <span className="spans">*</span>
        </div>
        <div>
          <input type="number" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          EXPIRE DAYS <span className="spans">*</span>
        </div>
        <div className="input">
          <input type="text" required></input>
          <span>(Days only)</span>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SOCIAL MEDIA MESSAGE<span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          REFERRAL PAGE CONTENT<span className="spans">*</span>
        </div>
        <div className="input">
          <textarea id="w3review" name="w3review" rows="2" cols="50" />
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

export default ReferralSetting;
