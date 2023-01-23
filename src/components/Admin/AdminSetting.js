import { useState } from "react";
import "./Style.css";
function AdminSetting() {
  const [https, setHttps] = useState("");
  const Change = (e) => {
    setHttps(e.target.value);
  };
  return (
    <div>
      <form>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Admin Name: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Email Adress: </label>
          <input type="email" required className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Site Contact Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Zoho Error Log Notification Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Product Quantaity Thresold Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Product Quantity API key : </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Bulk Order Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Office furniture Order Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">US Lead Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Auto Call Report Receipt Mail : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Report Receipt Email : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Failed Email Addresses : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Weekly Report Emails : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Site Name: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Logo: </label>
          <input type="file" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Favicon: </label>
          <input type="file" className="input5"></input>
        </div>

        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Footer Content: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Like Button text: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Liked Button text: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Unlike Button text: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Site Common Prefix: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Payout Expire Days: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings">
          <label htmlFor="">Header Code Snippet: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }}>
          <label htmlFor="">HTTPS Enabled? </label>
          <input
            type="radio"
            name="https"
            onChange={Change}
            className="Radio"
          ></input>
          <label>Yes</label>
          <input
            type="radio"
            name="https"
            onChange={Change}
            style={{ marginLeft: "20px" }}
          ></input>
          <label>No</label>
        </div>
        <button className="butoon">SUBMIT</button>
      </form>
    </div>
  );
}

export default AdminSetting;
