import React from "react";
function Add_New_Color() {
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
        ☰ <span style={{ marginLeft: "10px" }}>ADD COLOR</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          COLOR NAME{" "}<span style={{ color: "red" }}>*</span>
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

export default Add_New_Color;
