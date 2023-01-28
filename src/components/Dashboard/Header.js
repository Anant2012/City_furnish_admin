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
      <div className="w-full mt-5 px-48 flex flex-wrap gap-x-6 justify-center gap-y-5">
        <span
          className="css shadow-2xl bg-white rounded-xl 
         cursor-pointer px-4 py-2"
        >
          <HiUsers className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Users
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <GoTools className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Settings
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <ImUsers className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Sellers
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <BsBoxArrowUp className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Category
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <AiFillFolder className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Product
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <MdOutlineFolderSpecial className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Fancy Box
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <RiFileList3Line className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            List
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <RiCoupon4Line className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Coupons
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <BsGift className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Gift Cards
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <TbNews className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Newsletter
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <HiOutlineHome className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Location
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <RiPagesLine className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            {" "}
            Pages
          </span>
        </span>
        <span
          className="css shadow-2xl bg-white px-4 py-1 rounded-xl 
         cursor-pointer"
        >
          <SlPaypal className="iconsCss text-blue-900" />
          <span className="font-lora text-lg mx-auto text-blue-900 font-medium tracking-wide">
            Payment
          </span>
        </span>
      </div>
      <div className="flex space-x-5 justify-center mt-5" style={{}}>
        <span className="flex flex-col space-y-3 bg-blue-100/20 rounded-2xl h-28 px-2 justify-center border-2 border-blue-900/30 shadow-xl">
          <span className="font-lora tracking-wider font-semibold text-blue-900">
            TOTAL PRODUCTS
          </span>
          <p className="text-2xl font-semibold font-ptsherif text-blue-800">
            265
          </p>
        </span>
        <span className="flex flex-col space-y-3 bg-blue-100/20 rounded-2xl h-28 px-2 justify-center border-2 border-blue-900/30 shadow-xl">
          <span className="font-lora tracking-wider font-semibold text-blue-900">TOTAL USERS</span>
          <p
            className="text-2xl font-semibold font-ptsherif text-blue-800"
          >
            81289
          </p>
        </span>
        <span className="flex flex-col space-y-3 bg-blue-100/20 rounded-2xl h-28 px-2 justify-center border-2 border-blue-900/30 shadow-xl">
          <span className="font-lora tracking-wider font-semibold text-blue-900">TOTAL SELLERS</span>
          <p
            className="text-2xl font-semibold font-ptsherif text-blue-800"
          >
            42
          </p>
        </span>
        <span className="flex flex-col space-y-3 bg-blue-100/20 rounded-2xl h-28 px-2 justify-center border-2 border-blue-900/30 shadow-xl">
          <span className="font-lora tracking-wider font-semibold text-blue-900">TOTAL GIFT CARDS</span>
          <p
            className="text-2xl font-semibold font-ptsherif text-blue-800"
          >
            0
          </p>
        </span>
        <span className="flex flex-col space-y-3 bg-blue-100/20 rounded-2xl h-28 px-2 justify-center border-2 border-blue-900/30 shadow-xl">
          <span className="font-lora tracking-wider font-semibold text-blue-900">TOTAL SUBSCRIBERS</span>
          <p
            className="text-2xl font-semibold font-ptsherif text-blue-800"
          >
            0
          </p>
        </span>
      </div>
    </div>
  );
}

export default Header;