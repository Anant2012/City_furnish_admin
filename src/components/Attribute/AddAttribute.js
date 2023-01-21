// import { display } from '@mui/system';
// import "./AddAttribute.css"
import React from 'react'
import { useState } from 'react';
const AddAttribute = () => {
    const [active, setActive] = useState("Active");
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
      ☰ <span style={{ marginLeft: "10px" }}>ADD NEW ATTRIBIUTE</span>
    </div>
    <div className="pass">
      <div style={{ marginBottom: "1%" }}>
     ATTRIUTE NAME <span className="spans">*</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="15% Discount"
          className="input"
        ></input>
      </div>
    </div> 
    <div className='toggleContainer'>
   <div className="pass">
   <div  style={{ marginBottom: "1%" }}>
     Status 
     {/* <div className="input"> */}
     {active ? (
          <button
            type="button"
            class="btn btn-secondary input"
            onClick={() => setActive(!active)}
          >
           Inactive
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success input"
            onClick={() => setActive(!active)}
          >
            Active
          </button>
        )}
        </div>
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
  )
}

export default AddAttribute