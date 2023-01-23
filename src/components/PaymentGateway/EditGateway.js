const EditGateway = () => {
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
        ☰ <span style={{ marginLeft: "10px" }}>CASHGRAM</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          MODE<span className="spans">*</span>
        </div>
        <div className="input">
          <input type="radio" name="mode" id="live" />
          <label for="live">Live</label>
          <input type="radio" name="mode" id="sandbox" />
          <label for="sandbox">Sandbox</label>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          CLIENT ID<span className="spans">*</span>
        </div>
        <div>
          <input type="text" className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          CLIENT TOKEN <span className="spans">*</span>
        </div>
        <div>
          <input type="text" className="input"></input>
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

export default EditGateway;
