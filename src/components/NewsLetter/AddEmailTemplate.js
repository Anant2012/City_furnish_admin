import "../Admin/Style.css";

const AddEmailTemplate = () => {
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
        ☰ <span style={{ marginLeft: "10px" }}>CHANGE PASSWORD</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          CURRENT PASSWORD <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          NEW PASSWORD <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          RETYPE A PASSWORD <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
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
          CHANGE
        </button>
      </div>
    </div>
  );
};

export default AddEmailTemplate;
