import React from "react";
// import "./Style.css";

function Seo() {
    return (
        <div
            style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}
        >
            <div className="pass">
                <div style={{ marginBottom: "1%" }}>
                    Meta Title 
                </div>
                <div>
                    <input type="text" required className="input"></input>
                </div>
            </div>
            <div className="pass">
                <div style={{ marginBottom: "1%" }}>
                    Meta Keyword 
                </div>
                <div>
                    <textarea className="input" rows="2" cols="30"></textarea>
                </div>
            </div>
            <div className="pass">
                <div style={{ marginBottom: "1%" }}>
                    Meta Description 
                </div>
                <div>
                    <textarea className="input" rows="2" cols="30"></textarea>
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
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Seo;
