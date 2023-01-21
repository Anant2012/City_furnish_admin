import React from "react";
// import "./AddCity.css";
import { useState } from "react";

function AddCity() {
  const [active, setActive] = useState( "active");
  return (
    <div style={{ margin:"3%",borderRadius: "7px", border: "1px solid gray" }}>
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "10px",
        }}
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD CITY</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          CITY NAME <span className="spans">*</span>
         
        </div>
        <div>
        <input
            type="text"
            required
            className="input"
            placeholder=""
          ></input>
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

export default AddCity;
