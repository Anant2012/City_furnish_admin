import React from "react";
import "./Style.css";

function SiteMap() {
    return (
        <div className="sitemap bg-white shadow-sm rounded-tr-md rounded-tl-md overflow-hidden tracking-wider mx-auto" style={{ margin: "3%", borderRadius: "7px"}}>
            <div
                className="bg-baby_blue text-white font-lora py-3 text-2xl pl-2">
                ☰ <span style={{ marginLeft: "10px" }}>SiteMap Creation Successful</span>
            </div>
            <div className="pass ">
               <p className="trackin-wider text-red-500 mx-auto">Successful: Sitemap successfuly created and saved to sitemap.xml</p>
            </div>
        </div>
    );
}

export default SiteMap;
