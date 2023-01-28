import React, { useState } from "react";
import "./Style.css";
import { BiErrorCircle } from "react-icons/bi";
function SocialMediaSetting() {
    const [https, setHttps] = useState("");
    //   const Change = (e) => {
    //     setHttps(e.target.value);
    //   };
    return (
        <div className="font-lora">
            <div
                className="flex items-center space-x-4 text-red-500 ml-3"
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
            <div className="flex items-center space-x-4 text-red-500 ml-3">
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
            <div className="flex items-center space-x-4 text-red-500 ml-3">
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
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">FACEBOOK LINK </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">TWITTER LINK </label>
                    <input type="text" required className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">TWITTER CONSUMER KEY </label>
                        <input type="text" className="input5"></input>
                        <div className="text-xs flex items-center space-x-4 text-red-500 ml-[22%] mt-4">
                            Note: For Twitter Callback URL Copy This Url and Paste It. - https://rentofurniture.com/twtest/callback
                        </div>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">TWITTER SECRET KEY </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">GOOGLE CLIENT ID </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">GOOGLE REDIRECT URL </label>
                    <input type="text" className="input5"></input>
                    <div className="text-xs flex items-center space-x-4 text-red-500 ml-[22%] mt-4">Note: For Google Redirect Url Copy This Url and Paste It. - https://rentofurniture.com/googlelogin/googleRedirect
                    </div>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">GOOGLE SECRET KEY </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">GOOGLE DEVELOPER KEY </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">FACEBOOK APP ID</label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="" className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold">FACEBOOK APP SECRET </label>
                    <input type="text" className="input5"></input>
                </div>
            </form>
            <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Submit
        </button>
        </div>
    );
}

export default SocialMediaSetting;