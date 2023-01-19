import React, { useState } from "react";
import AdminSetting from "./AdminSetting";
import SocialMediaSetting from "./SocialMediaSetting";
import GoogleWebmaster from "./GoogleWebmaster";
import "./Style.css";
function Settings() {
    const [opened, setOpened] = useState(true);
    const [opened1, setOpened1] = useState(false);
    const [opened2, setOpened2] = useState(false);
    const Now = () => {
        setOpened(true);
        setOpened1(false);
        setOpened2(false);
    };
    const Now1 = () => {
        setOpened(false);
        setOpened1(true);
        setOpened2(false);
    }
    const Now2 = () => {
        setOpened(false);
        setOpened1(false);
        setOpened2(true);
    }
    return (
        <div className="all">
            <div
                style={{
                    fontWeight: "bold",
                    backgroundColor: "lightgray",
                    padding: "10px",
                }}
            >
                ☰ <span style={{ marginLeft: "10px" }}>GLOBAL SITE CONFIGURATION</span>
                <span className="main">
                    <span
                        style={{
                            margin: "5px",
                            cursor: "pointer",
                            border: "1px solid white",
                            padding: "5px",
                        }}
                        className="spanss"
                        onClick={Now}
                    >
                        {" "}
                        Admin Settings
                    </span>
                    <span
                        style={{
                            margin: "5px",
                            cursor: "pointer",
                            border: "1px solid white",
                            padding: "5px",
                        }}
                        className="spanss"
                        onClick={Now1}
                    >
                        Social Media Settings
                    </span>
                    <span
                        style={{
                            margin: "5px",
                            cursor: "pointer",
                            border: "1px solid white",
                            padding: "5px",
                        }}
                        className="spanss"
                        onClick={Now2}
                    >
                        {" "}
                        Google Webmaster
                    </span>
                </span>
            </div>
            {opened && <AdminSetting />}
            {opened1 && <SocialMediaSetting />}
            {opened2 && <GoogleWebmaster />}
        </div>
    );
}

export default Settings;
