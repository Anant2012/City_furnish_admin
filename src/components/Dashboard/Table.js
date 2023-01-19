import React from "react";
import "./Table.css";
import { GrLineChart } from "react-icons/gr";
import { HiUsers } from "react-icons/hi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Table() {
  return (
    <div>
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
            style={{
              padding: "10px 10px",
              fontWeight: "bold",
              backgroundColor: "#adb5bd",
            }}
          >
            <GrLineChart />
            <span style={{ margin: "0px 15px" }}>USERS</span>
          </div>
          <div
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "10px 10px",
            }}
          >
            Users Count 81289
          </div>
          <table className="rwd-table">
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
            style={{
              padding: "10px 10px",
              fontWeight: "bold",
              backgroundColor: "#adb5bd",
            }}
          >
            <HiUsers />
            <span style={{ margin: "0px 15px" }}>Recent Users</span>
          </div>
          <div
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "10px 10px",
            }}
          ></div>
          <div
            style={{
              border: "1px solid lightgray",
              padding: "2% 2% 0 2%",
              backgroundColor: "white",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                Name: amit kiri5143
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  alt="Loading.."
                  style={{ width: "120%" }}
                />
                <AiOutlineCheck />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                Name: amit kiri5143
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                Name: amit kiri5143
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
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
            style={{
              padding: "10px 10px",
              fontWeight: "bold",
              backgroundColor: "#adb5bd",
            }}
          >
            <GrLineChart />
            <span style={{ margin: "0px 15px" }}>USERS</span>
          </div>
          <div
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "10px 10px",
            }}
          >
            Users Count 81289
          </div>
          <table className="rwd-table">
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
            style={{
              padding: "10px 10px",
              fontWeight: "bold",
              backgroundColor: "#adb5bd",
            }}
          >
            <HiUsers />
            <span style={{ margin: "0px 15px" }}>Recent Users</span>
          </div>
          <div
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "10px 10px",
            }}
          ></div>
          <div
            style={{
              border: "1px solid lightgray",
              padding: "2% 2% 0 2%",
              backgroundColor: "white",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                Name: amit kiri5143
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                Name: amit kiri5143
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                Name: amit kiri5143
                <p className="ip">
                  IP: 172.31.15.128 Date: 2023-01-02 19:53:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
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
            style={{
              padding: "10px 10px",
              fontWeight: "bold",
              backgroundColor: "#adb5bd",
            }}
          >
            <AiOutlineShoppingCart />
            <span style={{ margin: "0px 15px" }}>RECENT ORDERS</span>
          </div>
          <div
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "10px 10px",
            }}
          >
            Users Count 81289
          </div>
          <table className="rwd-table">
            <tr>
              <td>Today</td>
              <td className="tab">0</td>
              <td className="tab">0</td>
              <td className="tab">0</td>
            </tr>
            <tr>
              <td>This Month</td>
              <td className="tab">6</td>
              <td className="tab">0</td>
              <td className="tab">0</td>
            </tr>
            <tr>
              <td>This Year</td>
              <td className="tab">5</td>
              <td className="tab">0</td>
              <td className="tab">0</td>
            </tr>
          </table>
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              padding: "10px 10px",
              fontWeight: "bold",
              backgroundColor: "#adb5bd",
            }}
          >
            <HiUsers />
            <span style={{ margin: "0px 15px" }}>Recent SellerList</span>
          </div>
          
          <div
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgray",
              padding: "10px 10px",
            }}
          ></div>
          <div
            style={{
              border: "1px solid lightgray",
              padding: "2% 2% 0 2%",
              backgroundColor: "white",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                Name: shubhamkaushik
                <p className="ip">
                  IP: 115.249.229.217 Date: 2016-09-06 05:58:48
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                Name: samikshakhanna
                <p className="ip">
                  IP: 182.64.104.11 Date: 2016-08-29 06:41:59
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                Name: Anna
                <p className="ip">
                  IP: 115.188.135.154 Date: 2016-08-16 06:53:43
                </p>
                <FiEdit2
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
                <CiCircleRemove
                  style={{
                    width: "25%",
                    height: "15%",
                    border: "1px solid lightgray",
                    padding: "2px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "30%", textAlign: "center" }}>
                <img
                  src="https://rentofurniture.com/images/user-thumb1.png"
                  style={{ width: "120%" }}
                  alt="Loading.."
                />
                <AiOutlineCheck />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Table;
