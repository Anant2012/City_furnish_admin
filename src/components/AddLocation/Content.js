import React, { useState } from "react";
// import "./Style.css";
function Content() {
    const [https, setHttps] = useState("");
    const Change = (e) => {
        setHttps(e.target.value);
    };
    return (
        <div >
            <form>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Country Name </label><span className="spans">*</span>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Iso Code 2 </label>
                    <input type="text" required className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Iso Code 3 </label>
                    <input type="text" required className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Country Shipping Cost </label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Country Tax</label>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Currency Symbol</label><span className="spans">*</span>
                    <input type="text" className="input5"></input>
                </div>
                <div style={{ margin: "2%" }} className="Settings">
                    <label htmlFor="">Currency</label><span className="spans">*</span>
                    <input type="text" className="input5"></input>
                </div>
                <button className="butoon">SUBMIT</button>
            </form>
        </div>
    );
}

export default Content;
