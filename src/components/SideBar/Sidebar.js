import React, { useState } from "react";
import "./Sidebar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { SideBarData } from "../../constants/SideBarData";
import SubList from "./SubList";

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [openedId, setOpenedId] = useState();
  // const [open1, setOpen1] = useState(false);
  const toggleSubList = (idx) =>
    openedId === idx ? setOpenedId(null) : setOpenedId(idx);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

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
          <h4 className="mb-0">Sidebar Header</h4>
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
          {/* <ul>
        </nav>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Dash</h4>
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
                    {openedId === idx && <SubList items={item.items} />}
                  </li>
                </ul>
              );
            })}
            {/* <ul>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Admin<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Admin Users</div>
                    <div className="sub-item">Change Password</div>
                    <div className="sub-item">Settings</div>
                    <div className="sub-item">SMTP Settings</div>
                    <div className="sub-item">Mailchinp Settings</div>
                    <div className="sub-item">Sitemap Creation-New</div>
                    <div className="sub-item">Order Setting</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Subadmin<RiArrowDropDownLine className="icon" />
                </a>
                {open1 && (
                  <div className="sub-link">
                    <div className="sub-item">Subadmin list</div>
                    <div className="sub-item">Add New Subadmin</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Users<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Dashboard</div>
                    <div className="sub-item">User List</div>
                    <div className="sub-item">Add New User</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                Manage App<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Bulk Notification</div>
                    <div className="sub-item">Promotional Notification</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Category<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Category List</div>
                    <div className="sub-item">Banner List</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Filters<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Filter List</div>
                    <div className="sub-item">Add Filter</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Product<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Selling Product List</div>
                    <div className="sub-item">Affilated Product List</div>
                    <div className="sub-item">Product Components List</div>
                    <div className="sub-item">Customization Request</div>
                    <div className="sub-item">Add New Product</div>
                    <div className="sub-item">Sitemap Creation-New</div>
                    <div className="sub-item">Order Setting</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Product Quantity<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Product Quantity Details</div>
                    <div className="sub-item">Product Thresold Quantity</div>
                    <div className="sub-item">Product Buffer Quantity</div>
                    <div className="sub-item">Out of stock Notification</div>
                    <div className="sub-item">Product Out of Stock</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Orders<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Paid Payment</div>
                    <div className="sub-item">Failed Payment</div>
                    <div className="sub-item">Offline Orders</div>
                    <div className="sub-item">Upfront Payment Links</div>
                    <div className="sub-item">Tenure Extension Link</div>
                    <div className="sub-item">Tenure Extension History</div>
                    <div className="sub-item">Defaluters List</div>
                    <div className="sub-item">Office Furniture Orders</div>
                    <div className="sub-item">Bulk Orders</div>
                    <div className="sub-item">Recurring Payment</div>
                    <div className="sub-item">Recurring Logs</div>
                    <div className="sub-item">Customer Payment</div>
                    <div className="sub-item">Payout</div>
                    <div className="sub-item">Orders E-mandate</div>
                    <div className="sub-item">Zoho Logs</div>
                    <div className="sub-item">Zoho Desk Logs</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Manage Documents<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Document</div>
                    <div className="sub-item">Add Document</div>
                    <div className="sub-item">Cibil Score Slots</div>
                    <div className="sub-item">Add New Slot</div>
                    <div className="sub-item">Show User Document</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Coins<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Coin Details</div>
                    <div className="sub-item">Coin Transaction List</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Color<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Color List</div>
                    <div className="sub-item">Add Color</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Offer<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Offer Listing</div>
                    <div className="sub-item">Add Offer</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Attribute<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Attribute List</div>
                    <div className="sub-item">Add Attribute</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Coupon Codes<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Coupon Code List</div>
                    <div className="sub-item">Add Coupon Code</div>
                    <div className="sub-item">Voucher Setting</div>
                    <div className="sub-item">Referral Settings</div>
                    <div className="sub-item">Referral Code List</div>
                    <div className="sub-item">SI CC Discount Setting</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Price Range<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Price Range List</div>
                    <div className="sub-item">Add Price Range</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Newsletter Template<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Subscription List</div>
                    <div className="sub-item">Change Password</div>
                    <div className="sub-item">Email Template List</div>
                    <div className="sub-item">Add Email Template</div>
                    <div className="sub-item">Order Status Notification</div>
                    <div className="sub-item">Add Order Notification</div>
                    <div className="sub-item">Service Notification</div>
                    <div className="sub-item">Add Service Notification</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                 Location & Tax<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Location List</div>
                    <div className="sub-item">Add Location</div>
                    <div className="sub-item">Add State Tax</div>
                    <div className="sub-item">City Warehouse Code</div>
                    <div className="sub-item">City List</div>
                    <div className="sub-item">Add City</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Pages<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">List of pages</div>
                    <div className="sub-item">Add Main Page</div>
                    <div className="sub-item">Add Sub Page</div>
                  </div>
                )}
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Payment Gateway<RiArrowDropDownLine className="icon" />
                </a>
              </li>
              <li>
                <a className="sd-link" onClick={Multiple}>
                  Banner<RiArrowDropDownLine className="icon" />
                </a>
                {open && (
                  <div className="sub-link">
                    <div className="sub-item">Banner Listing</div>
                    <div className="sub-item">Add Banner</div>
                  </div>
                )}
              </li>
              
            </ul> */}
        </div>
      </div>
      {/* <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div> */}
    </div>
  );
};
export default Sidebar;
