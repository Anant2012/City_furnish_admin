import React, { useState } from "react";
import AdminSetting from "./AdminSetting";
import SocialMediaSetting from "./SocialMediaSetting";
import GoogleWebmaster from "./GoogleWebmaster";
import "./Style.css";
function Settings() {
    const [opened, setOpened] = useState("");
    const Selector = () =>{
        if(opened === "Admin"){
            return <AdminSetting />
        }else if(opened === "Social"){
            return <SocialMediaSetting />
        }
        return <GoogleWebmaster />
    }
    return (
        <div className="all w-[70%] mx-auto bg-white shadow-sm">
            <div className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between"
            >
                <div className="flex items-center space-x-2">
                <span className="text-2xl">
                    ☰</span> 
                    <span style={{ marginLeft: "13px" }} className="text-3xl">GLOBAL SITE CONFIGURATION</span>
                </div>
                <div className="main text-md flex space-x-6 items-center">
                    <span className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold" onClick={()=>setOpened("Admin")}>
                        Admin Settings
                    </span>
                    <span className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold" onClick={()=>setOpened("Social")}>
                        Social Media Settings
                    </span>
                    <span className="spanss cursor-pointer duration-300 hover:text-green-200 font-semibold" onClick={()=>setOpened("Google")}>
                        Google Webmaster
                    </span>
                </div>
            </div>
            {
                Selector()
            }
        </div>
    );
}

export default Settings;
