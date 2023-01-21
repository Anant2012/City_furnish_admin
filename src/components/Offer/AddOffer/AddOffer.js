import React from "react";
// import "./AddOffer.css";

function AddOffer() {
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
          OFFER PRICE TEXT <span className="spans">*</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="15% Discount"
            className="input"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          OFFER PRICE BELOW TEXT <span className="spans" placeholder="On your First Order">*</span>
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
          OFFER COUPON CODE <span className="spans" >*</span>
        </div>
        
        <div>
          <input type="text" className="input" placeholder='SHORT3M'></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          MAX DISCOUNT AMOUNT <span className="spans" >*</span>
        </div>
        
        <div>
          <input type="text" className="input" placeholder='1200'></input>
        </div>
      </div>

      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          OFFER DESCRIPTION <span className="spans" >*</span>
        </div>
        
        <div>
          <input type="text" className="input" placeholder="first month rent off"></input>
        </div>
      </div>

      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          PUBLISH ON WISHLIST PAGE <span className="spans">*</span>
        </div>
        
        <div>
          <input type="checkbox" className="input"></input>
        </div>

            {/* <input type="button" value={"ADD MORE"} style={{marginLeft:'20px'}} ></input> */}
      
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

export default AddOffer;
