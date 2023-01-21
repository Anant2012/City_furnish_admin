
import React from "react";
// import "./AddStateTax.css";
import { useState } from "react";

function AddStateTax() {
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
        ☰ <span style={{ marginLeft: "10px" }}>ADD NEW OFFER</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          COUNTRY NAME <span className="spans">*</span>
         
        </div>
        <div>
        <select className="input">
            <option>India</option>
            <option>Australia</option>
            <option>Brazil</option>
          </select>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
         STATE NAME <span className="spans" placeholder="On your First Order">*</span>
        </div>
        <div>
          <input
            type="text"
            required
            className="input"
            placeholder="On Your First Order"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
         STATE CODE <span className="spans" >*</span>
        </div>
        
        <div>
          <input type="text" className="input" placeholder='SHORT3M'></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
         STATE TAX(%) <span className="spans" >*</span>
        </div>
        
        <div>
          <input type="text" className="input" placeholder='1200'></input>
        </div>
      </div>

      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          STATUS <span className="spans" >*</span>
        </div>
        <div className="input">
             {active ? (
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => setActive(!active)}
              >
                UnActive
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => setActive(!active)}
              >
                Active
              </button>
            )}
          
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

export default AddStateTax;
