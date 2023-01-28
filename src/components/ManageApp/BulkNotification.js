import "./style.css";
import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";

const BulkNotification = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => handleOpen(row)}
          className="delete-icon"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Delete"
        >
          <MdDelete />
        </button>
      ),
    },
  ];

  const getData = async () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <div className="container-fluid mt-4">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div className="bg-white rounded-md overflow-hidden">
            <div className="bg-baby_blue text-white font-lora  py-3 px-3 tracking-wider font-semibold  flex items-center overflow-hidden ">
              ☰ <span className="ml-4">APP NOTIFICATION DASHBOARD</span>
            </div>
            <div
              style={{ margin: "20px 35px 0 35px" }}
              className="font-lora text-xl font-semibold"
            >
              Send Bulk Notification
            </div>
            <div className="inner-container">
              <div className="field">
                <div className="label font-lora text-md font-semibold">
                  Users Filter Option<span className="required">*</span>
                </div>
                <select name="users_filter" id="users_filter">
                  <option value="all">All</option>
                  <option value="recent_downloaded_app">
                    Recent Downloaded App
                  </option>
                </select>
              </div>
              <div className="field">
                <div className="label font-lora text-md font-semibold">
                  From Date<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input type="date" required />
                </div>
              </div>
              <div className="field">
                <div className="label font-lora text-md font-semibold">
                  To Date<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input type="date" required />
                </div>
              </div>
              <div className="field">
                <div className="label font-lora text-md font-semibold">
                  Screen To Redirect<span className="required">*</span>
                </div>
                <div className="field-input">
                  <select name="screen_redirect" id="screen_redirect">
                    <option value="select_screen font-lora text-md font-semibold">
                      Select Screen
                    </option>
                    <option value="home_screen font-lora text-md font-semibold">
                      Home Screen
                    </option>
                  </select>
                </div>
              </div>
              <div className="field">
                <div className="label font-lora text-md font-semibold">
                  Notification Title<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input type="text" required />
                </div>
              </div>
              <div className="field">
                <div className="label font-lora text-md font-semibold">
                  Meassge Body<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input type="text" required />
                </div>
              </div>
            </div>
            <div>
              <button className="w-[20%] ml-[32%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700 ">
                SEND NOTIFICATION
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            title="APP USERS"
          />
        </div>
      </div>
    </div>
  );
};
export default BulkNotification;
