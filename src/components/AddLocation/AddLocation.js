import React, { useState } from "react";
import Content from "./Content";
import Seo from "./Seo";
// import GoogleWebmaster from "./GoogleWebmaster";
// import "./Style.css";
function AddLocation() {
    const [opened, setOpened] = useState(true);
    const [opened1, setOpened1] = useState(false);
    const Now = () => {
        setOpened(true);
        setOpened1(false);
    };
    const Now1 = () => {
        setOpened(false);
        setOpened1(true);
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
                ☰ <span style={{ marginLeft: "10px" }}>Add New Location</span>
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
                        Content
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
                        Social Media AddLocation
                    </span>
                </span>
            </div>
            {opened && <Content />}
            {opened1 && <Seo />}
        </div>
    );
}

export default AddLocation;
