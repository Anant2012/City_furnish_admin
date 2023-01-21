import React from "react";
import "./Style.css";
function Mailchimp() {
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
        ☰ <span style={{ marginLeft: "10px" }}>MAILCHIMP SETTINGS</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>API KEY</div>
        <div>
          <input type="text" required className="input" ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>LIST ID</div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>STATUS</div>
        <div className="input">
        <span className="forms">
          <input className="form-check-input" type="radio" />
          Yes</span>
          <span className="forms">
            <input className="form-check-input" type="radio" />
            No
          </span>
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

export default Mailchimp;
