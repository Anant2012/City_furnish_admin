import React from "react";
import "./Style.css";

function SiteMap() {
    return (
        <div className="sitemap" style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}>
            <div
                style={{
                    fontWeight: "bold",
                    backgroundColor: "lightgray",
                    border: "1px solid lightgray",
                    padding: "10px",
                }}
            >
                ☰ <span style={{ marginLeft: "10px" }}>SiteMap Creation Successful</span>
            </div>
            <div className="pass">
               <p>Successful: Sitemap successfuly created and saved to sitemap.xml</p>
            </div>
        </div>
    );
}

export default SiteMap;
