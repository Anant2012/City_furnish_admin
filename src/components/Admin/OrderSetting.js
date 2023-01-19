import React, { useState } from "react";
import "./Style.css";

function OrderSetting() {
    const [status, setStatus] = useState("");
    const Change = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}>
            <div
                style={{
                    fontWeight: "bold",
                    backgroundColor: "lightgray",
                    border: "1px solid lightgray",
                    padding: "10px",
                }}
            >
                ☰ <span style={{ marginLeft: "10px" }}>Order Setting Form</span>
            </div>
            <div className="pass">
                <div style={{ marginBottom: "1%" }}>
                    Minimum Order Value <span className="spans">*</span>
                </div>
                <div>
                    <input
                        type="number"
                        required
                        className="input"
                    ></input>
                </div>
            </div>
            <div style={{ marginLeft: "40px" }}>
                <label htmlFor="">Status : </label>
                <input type="radio" name="status"  onChange={Change} className="Radio"></input>
                <label htmlFor="">Enable</label>
                <input type="radio" name="status" onChange={Change} style={{ marginLeft: "20px" }}></input>
                <label htmlFor="">Disable</label>

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
                    Update
                </button>
            </div>
        </div>
    );
}

export default OrderSetting;
