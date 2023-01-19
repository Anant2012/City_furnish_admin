import React from "react";
import "./Style.css";
function SMTP() {
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
        ☰ <span style={{ marginLeft: "10px" }}>SMTP SETTINGS</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }} >
          SMTP HOST
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }} >
          SMTP PORT
        </div>
        <div>
          <input type="number" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }} >
          SMTP EMAIL
        </div>
        <div>
          <input type="email" className="input" required></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SMTP PASSWORD
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
          SAVE
        </button>
      </div>
    </div>
  );
}

export default SMTP;
