import React from "react";
import "./Table.css";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import { AiOutlineShoppingCart } from "react-icons/ai";
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';


function Table() {
  return (
    <div className="font-lora">
      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gap: "1rem",
        }}
        className="cards"
      >
        <div style={{ width: "100%" }}>
          <div 
            className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between"
          >
            <TrendingUpOutlinedIcon/>
            <span style={{ margin: "0px 15px" }} className="text-2xl font-lora">USERS</span>
          </div>
          <div className="font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between bg-sky-100 text-gray-800 text-xl"
          >
            Users Count 81289
          </div>
          <table className="rwd-table text-center font-lora text-xl">
            <tr>
              <td>Today</td>
              <td className="tab">0</td>
            </tr>
            <tr>
              <td>This Month</td>
              <td className="tab">6</td>
            </tr>
            <tr>
              <td>This Year</td>
              <td className="tab">5</td>
            </tr>
          </table>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="flex justify-between bg-baby_blue text-white py-3 font-semibold text-xl items-center px-3"
          >
            <PersonRoundedIcon />
            <span style={{ margin: "0px 15px" }} className="text-2xl font-lora">Recent Users</span>
          </div>
          <div
            className="bg-sky-100"
          ></div>
          <div
            className="flex flex-col space-y-5 bg-white px-3 py-3 rounded-lg"
          >
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gap: "1rem",
        }}
        className="cards"
      >
        <div style={{ width: "100%" }}>
          <div 
            className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between"
          >
            <TrendingUpOutlinedIcon/>
            <span style={{ margin: "0px 15px" }} className="text-2xl font-lora">USERS</span>
          </div>
          <div className="font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between bg-sky-100 text-gray-800 text-xl"
          >
            Users Count 81289
          </div>
          <table className="rwd-table text-center font-lora text-xl">
            <tr>
              <td>Today</td>
              <td className="tab">0</td>
            </tr>
            <tr>
              <td>This Month</td>
              <td className="tab">6</td>
            </tr>
            <tr>
              <td>This Year</td>
              <td className="tab">5</td>
            </tr>
          </table>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="flex justify-between bg-baby_blue text-white py-3 font-semibold text-xl items-center px-3"
          >
            <PersonRoundedIcon />
            <span style={{ margin: "0px 15px" }} className="text-2xl font-lora">Recent Users</span>
          </div>
          <div
            className="bg-sky-100"
          ></div>
          <div
            className="flex flex-col space-y-5 bg-white px-3 py-3 rounded-lg"
          >
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gap: "1rem",
        }}
        className="cards"
      >
        <div style={{ width: "100%" }}>
          <div 
            className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between"
          >
            <TrendingUpOutlinedIcon/>
            <span style={{ margin: "0px 15px" }} className="text-2xl font-lora">USERS</span>
          </div>
          <div className="font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden justify-between bg-sky-100 text-gray-800 text-xl"
          >
            Users Count 81289
          </div>
          <table className="rwd-table text-center font-lora text-xl">
            <tr>
              <td>Today</td>
              <td className="tab">0</td>
            </tr>
            <tr>
              <td>This Month</td>
              <td className="tab">6</td>
            </tr>
            <tr>
              <td>This Year</td>
              <td className="tab">5</td>
            </tr>
          </table>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="flex justify-between bg-baby_blue text-white py-3 font-semibold text-xl items-center px-3"
          >
            <PersonRoundedIcon />
            <span style={{ margin: "0px 15px" }} className="text-2xl font-lora">Recent SellerList</span>
          </div>
          <div
            className="bg-sky-100"
          ></div>
          <div
            className="flex flex-col space-y-5 bg-white px-3 py-3 rounded-lg"
          >
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="">
                <span className="text-xl font-semibold">Name</span> <span className="font-medium ml-7">amit kiri5143</span>
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>

                <div className="flex space-x-3 mt-1 mb-2">
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <ModeEditRoundedIcon/>
                  </span>
                  <span className="bg-baby_blue text-white hover:scale-110 duration-300 cursor-pointer p-1 rounded-full flex items-center justify-center w-8 h-8">
                    <CancelRoundedIcon/>
                  </span>
                </div>

              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }} className="flex space-x-3 items-center">
                <span className="bg-green-100 text-green-500 px-2 rounded-md">
                  <CheckRoundedIcon />
                </span>
                <img src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Table;
