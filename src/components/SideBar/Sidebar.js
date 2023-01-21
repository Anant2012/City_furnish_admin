import React, { useState } from "react";
import "./Sidebar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { SideBarData } from "../../constants/SideBarData";
import SubList from "./SubList";
import { useNavigate } from "react-router";

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
    <div className="container-fluid mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
        <div className="container-fluid p-2">
          <div>
            <div onClick={ToggleSidebar} className="buton">
              ☰
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-header">
          <h4 className="mb-0" style={{cursor:"pointer"}} onClick={Homepage}>DASHBOARD</h4>
          <div onClick={ToggleSidebar}>
            <RxCross1 />
          </div>
        </div>
        <div className="sd-body">
          {SideBarData.map((item, idx) => {
            return (
              <ul>
                <li>
                  <a className="sd-link" onClick={() => toggleSubList(idx)}>
                    {item.heading}
                    <RiArrowDropDownLine className="icon" />
                  </a>
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
