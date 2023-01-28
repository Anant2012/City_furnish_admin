import React, { useState } from "react";
import Content from "./Content";
import Seo from "./Seo";
// import GoogleWebmaster from "./GoogleWebmaster";
// import "./Style.css";
function AddLocation() {
    const [content, setContent] = useState(true);
    // const [opened1, setOpened1] = useState(false);
    const Now = () => {
setContent(true)
    };
    const Now1 = () => {
setContent(false)
    }
    return (
        <div
        className='w-[70%] shadow-sm'
          style={{ margin: "3% auto",background: '#fff' }}
        >
          <div
            // style={{
            //   fontWeight: "bold",
            //   backgroundColor: "lightgray",
            //   border: "1px solid lightgray",
            //   padding: "10px",
            // }}
            className="bg-baby_blue flex justify-content-between font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider"
          >    <span>      ☰ <span style={{ marginLeft: "10px" }}>Add New Location</span></span>
                <span className="">
                    <span
                        style={{
                            margin: "5px",
                            cursor: "pointer",
                            border: "1px solid white",
                            padding: "5px",
                            fontSize:'14px',
                            borderRadius:'0.3rem'
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
                            fontSize:'14px',
                            borderRadius:'0.3rem'
                        }}
                        className="spanss"
                        onClick={Now1}
                    >
                        Social Media AddLocation
                    </span>
                </span>
            </div>
            {content ?  <Content />:<Seo />}
        </div>
    );
}

export default AddLocation;
