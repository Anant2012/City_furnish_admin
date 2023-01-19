import React, { useState } from "react";
import "./Style.css";
import { BiErrorCircle } from "react-icons/bi";
function SocialMediaSetting() {
    const [https, setHttps] = useState("");
    //   const Change = (e) => {
    //     setHttps(e.target.value);
    //   };
    return (
        <div>
            <div
                style={{
                    color: "red",
                    fontSize: "80%",
                    marginLeft: "10px",
                    marginTop: "10px",
                }}
            >
                <BiErrorCircle />
                <span style={{ marginLeft: "10px" }}>
                    Note: To create google api refer this{" "}
                    <a
                        href=""
                        style={{ cursor: "pointer", textDecoration: "none", color: "blue" }}
                    >
                        Reference Link
                    </a>
                </span>
            </div>
            <div style={{ color: "red", fontSize: "80%", marginLeft: "10px" }}>
                <BiErrorCircle />
                <span style={{ marginLeft: "10px" }}>
                    Note: To create Facebook api click below url, click Apps then Create
                    New App{" "}
                    <a
                        href=""
                        style={{ cursor: "pointer", textDecoration: "none", color: "blue" }}
                    >
                        Facebook Link
                    </a>
                </span>
            </div>
            <div style={{ color: "red", fontSize: "80%", marginLeft: "10px" }}>
                <BiErrorCircle />
                <span style={{ marginLeft: "10px" }}>
                    Note: To create Twitter api refer this{" "}
                    <a
                        href=""
                        style={{ cursor: "pointer", textDecoration: "none", color: "blue" }}
                    >
                        Reference Link
                    </a>
                </span>
            </div>
            <form>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">FACEBOOK LINK </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">TWITTER LINK </label>
                    <input type="text" required className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">TWITTER CONSUMER KEY </label>
                    <input type="text" className="input5"></input>
                    <div
                        style={{
                            fontSize: "12px",
                            color: "red",
                            // position: "absolute",
                            // right: "5%",
                        }}
                        className="talk"
                    >
                        Note: For Twitter Callback URL Copy This Url and Paste It. -
                        https://rentofurniture.com/twtest/callback
                    </div>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">TWITTER SECRET KEY </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">GOOGLE CLIENT ID </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">GOOGLE REDIRECT URL </label>
                    <input type="text" className="input5"></input>
                    <div
                        style={{
                            fontSize: "12px",
                            color: "red",
                            // position: "absolute",
                            // right: "5%",
                        }}
                        className="talk"
                    >
                        Note: For Google Redirect Url Copy This Url and Paste It. -
                        https://rentofurniture.com/googlelogin/googleRedirect
                    </div>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">GOOGLE SECRET KEY </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">GOOGLE DEVELOPER KEY </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">FACEBOOK APP ID</label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">FACEBOOK APP SECRET </label>
                    <input type="text" className="input5"></input>
                </div>
            </form>
            <button className="butoon">SUBMIT</button>
        </div>
    );
}

export default SocialMediaSetting;
