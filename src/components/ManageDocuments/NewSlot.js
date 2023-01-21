import React from "react";

function NewSlot() {
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
        ☰ <span style={{ marginLeft: "10px" }}>ADD NEW SLOT</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SLOT FROM <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SLOT TO <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SELECT DOCUMENT <span className="spans">*</span>
        </div>
        <div className="input">
          <select>
            <option value="fruit">PAN CARD</option>
            <option value="vegetable">Delivery Address Proof</option>
            <option value="meat">Permanent Address Proof</option>
            <option value="meat">Other</option>
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
}

export default NewSlot;
