import React from "react";

function Adddocument() {
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
        ☰ <span style={{ marginLeft: "10px" }}>ADD DOCUMENT</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          DOCUMENT NAME <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          ZOHO CASE FIELD <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          DOCUMENT UPLOAD LIMIT <span className="spans">*</span>
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
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Adddocument;
