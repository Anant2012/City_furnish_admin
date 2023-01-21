import React from "react";
function Add_offer() {
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
        ☰ <span style={{ marginLeft: "10px" }}>ADD NEW OFFER</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          OFFER PRICE TEXT <span style={{ color: "red" }}>*</span>
        </div>
        <div>
          <input
            type="password"
            required
            className="input"
            placeholder="15% Discount"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>OFFER PRICE BELOW TEXT</div>
        <div>
          <input
            type="password"
            required
            className="input"
            placeholder="on your first order"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>OFFER COUPON CODE</div>
        <div>
          <input
            type="password"
            required
            className="input"
            placeholder="SHORT3M"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>MAX DISCOUNT AMOUNT</div>
        <div>
          <input
            type="password"
            required
            className="input"
            placeholder="1200"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>OFFER DESCRIPTION</div>
        <div>
          <input
            type="password"
            required
            className="input"
            placeholder="First Month's rent OFF on furniture and home"
          ></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>PUBLISH ON WISHLIST PAGE</div>
        <div>
          <input type="CHECKBOX" required className="input"></input>
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

export default Add_offer;
