import React, { useState } from "react";
import "./Sidebar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { SideBarData } from "../../constants/SideBarData";
import SubList from "./SubList";
import { useNavigate } from "react-router";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsopen] = useState(false);
  const [openedId, setOpenedId] = useState();
  // const [open1, setOpen1] = useState(false);
  const toggleSubList = (idx) =>
    openedId === idx ? setOpenedId(null) : setOpenedId(idx);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const Homepage = () => {
    navigate("/admin");
    setIsopen(false);
  }

  return (
    <div className="container-fluid mt-3 font-sourserif ">
      <div className=" w-full h-16 bg-white rounded-xl flex items-center px-3 shadow-[0px_0px_15px_-6px_rgba(0,0,0,0.3)] duration-200 overflow-hidden ">
        <MenuOutlinedIcon onClick={ToggleSidebar} className="cursor-pointer hover:text-blue-800 hover:scale-110 duration-300"/>
        <div className="flex flex-grow justify-between items-center ml-6">
          <img src="https://d3juy0zp6vqec8.cloudfront.net/images/brand-logo.png" className="w-36"/>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold 
               cursor-pointer hover:text-baby_blue duration-300 tracking-wide">Administrator</span>
              <span className="text-sm cursor-pointer hover:text-baby_blue duration-300 tracking-wide">Visit Site | Settings</span>
            </div>
            <span className="p-1 rounded-full flex items-center justify-center cursor-pointer bg-blue-200/20 shadow-[0px_0px_15px_-5px_rgba(0,0,0,0.3)]  duration-200 shadow-baby_blue_links">
              <PowerSettingsNewOutlinedIcon fontSize="large" className="text-blue-600"/>
            </span>
          </div>
        </div>
      </div>
      <div className={`sidebar ${isOpen === true ? "active" : ""} `}>
        <div className="sd-header">
          <h4 className="mb-0 tracking-wider mx-auto text-3xl text-baby_blue font-sourserif" style={{cursor:"pointer"}} onClick={Homepage}>Dashboard</h4>
          <div onClick={ToggleSidebar}>
            <RxCross1 className="cursor-pointer hover:text-baby_blue duration-300 hover:scale-110 hover:rotate-45"/>
          </div>
        </div>
        <div className="sd-body flex flex-col space-y-2 scrollbar-thin scrollbar-thumb-baby_light_blue scrollbar-track-baby_blue_bg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {SideBarData.map((item, idx) => {
            return (
              <ul >
                <li>
                  <span className="  flex items-center bg-blue-500/10 p-2 rounded-lg cursor-pointer text-blue-900 tracking-wide justify-between px-4 duration-300 hover:bg-blue-500/30"  onClick={() => toggleSubList(idx)}>
                    <span>{item.heading}</span>
                    <KeyboardArrowDownRoundedIcon/>
                  </span>
                  {openedId === idx && (
                    <SubList items={item.items} ToggleSidebar={ToggleSidebar} />
                  )}
                </li>
              </ul>
            );
          })}
          
        </div>
      </div>
      <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
    </div>
  );
};
export default Sidebar;
