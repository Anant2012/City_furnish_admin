import { useState } from "react";
import "./Style.css";
function AdminSetting() {
  const [https, setHttps] = useState("");
  const Change = (e) => {
    setHttps(e.target.value);
  };
  return (
    <div className="bg-white">
      <form>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Admin Name:{" "}
          </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Email Adress:{" "}
          </label>
          <input type="email" required className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Site Contact Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Zoho Error Log Notification Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Product Quantaity Thresold Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            {" "}
            Product Quantity API key :{" "}
          </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Bulk Order Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Office furniture Order Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            US Lead Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Auto Call Report Receipt Mail :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label
            htmlFor=""
            className="font-lora font-semibold tracking-wide text-lg "
          >
            Report Receipt Email :{" "}
          </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Failed Email Addresses : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Weekly Report Emails : </label>
          <input type="email" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Site Name: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Logo: </label>
          <input type="file" className="input5 file:bg-baby_blue file:text-white" />
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Favicon: </label>
          <input type="file" className="input5 file:bg-baby_blue file:text-white" />
        </div>

        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Footer Content: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Like Button text: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Liked Button text: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Unlike Button text: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Site Common Prefix: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Payout Expire Days: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="Settings flex space-x-[10%]">
          <label htmlFor="">Header Code Snippet: </label>
          <input type="text" className="input5"></input>
        </div>
        <div style={{ margin: "2%" }} className="flex space-x-[14%]">
          <label htmlFor="">HTTPS Enabled? </label>
          <div className="flex space-x-2">
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
        </div>
        <button className="w-[20%] h-10 bg-baby_blue text-white rounded-lg mx-auto mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 relative left-[40%]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminSetting;
