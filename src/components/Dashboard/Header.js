import React from "react";
import "./Header.css";
import { HiUsers } from "react-icons/hi";
import { GoTools } from "react-icons/go";
import { ImUsers } from "react-icons/im";
import { BsBoxArrowUp } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { RiCoupon4Line } from "react-icons/ri";
import { BsGift } from "react-icons/bs";
import { TbNews } from "react-icons/tb";
import { SlPaypal } from "react-icons/sl";
import { HiOutlineHome } from "react-icons/hi";
function Header() {
  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: "3%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <span className="css">
          <HiUsers className="iconsCss" />
          Users
        </span>
        <span className="css">
          <GoTools className="iconsCss" />
          Settings
        </span>
        <span className="css">
          <ImUsers className="iconsCss" />
          Sellers
        </span>
        <span className="css">
          <BsBoxArrowUp className="iconsCss" />
          Category
        </span>
        <span className="css">
          <AiFillFolder className="iconsCss" />
          Product
        </span>
        <span className="css">
          <MdOutlineFolderSpecial className="iconsCss" />
          Fancy Box
        </span>
        <span className="css">
          <RiFileList3Line className="iconsCss" />
          List
        </span>
        <span className="css">
          <RiCoupon4Line className="iconsCss" />
          Coupons
        </span>
        <span className="css">
          <BsGift className="iconsCss" />
          Gift Cards
        </span>
        <span className="css">
          <TbNews className="iconsCss" />
          Newsletter
        </span>
        <span className="css">
          <HiOutlineHome className="iconsCss" />
          Location
        </span>
        <span className="css">
          <RiPagesLine className="iconsCss" />
          Pages
        </span>
        <span className="css">
          <SlPaypal className="iconsCss" />
          Payment
        </span>
      </div>
      <div className="ALLprod container" style={{}}>
        <span className="products">
          TOTAL PRODUCTS
          <p
            style={{
              textAlign: "center",
              color: "#c16a1c",
              fontWeight: "normal",
            }}
          >
            265
          </p>
        </span>
        <span className="products">
          TOTAL USERS
          <p
            style={{
              textAlign: "center",
              color: "#c16a1c",
              fontWeight: "normal",
            }}
          >
            81289
          </p>
        </span>
        <span className="products">
          TOTAL SELLERS
          <p
            style={{
              textAlign: "center",
              color: "#c16a1c",
              fontWeight: "normal",
            }}
          >
            42
          </p>
        </span>
        <span className="products">
          TOTAL GIFT CARDS
          <p
            style={{
              textAlign: "center",
              color: "#c16a1c",
              fontWeight: "normal",
            }}
          >
            0
          </p>
        </span>
        <span className="products">
          TOTAL SUBSCRIBERS
          <p
            style={{
              textAlign: "center",
              color: "#c16a1c",
              fontWeight: "normal",
            }}
          >
            0
          </p>
        </span>
      </div>
    </div>
  );
}

export default Header;
