import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
// import "./Style.css";

const Attribute_list = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    console.log("called onsearch fun", val);
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Attribute Name", selector: (row) => row.name, sortable: true },
    { name: "Created Date", selector: (row) => row.population, sortable: true },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <FaUserEdit
            style={{
              width: "20px",
              height: "24px",
              color: "gray",
              //   marginLeft: "10px",
            }}
          />
          <AiFillEye
            style={{
              width: "20px",
              height: "24px",
              color: "green",
              //   marginLeft: "10px",
            }}
          />
          <MdDelete
            style={{
              width: "20px",
              height: "24px",
              color: "brown",
              //   marginLeft: "10px",
            }}
          />
        </div>
      ),
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button
    //       onClick={() => handleOpen(row)}
    //       className="delete-icon"
    //       data-toggle="tooltip"
    //       data-placement="bottom"
    //       title="Delete"
    //     >
    //       <MdDelete />
    //     </button>
    //   ),
    // },
  ];

  const getData = async () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("errorr", err));

    // try {
    //   // console.log(userId);
    //   const url = "https://restcountries.com/v2/all";
    //   const response = await axios.get(url);
    //   if (response.status === 200) {
    //     console.log("wer", response.data);
    //     setData(data);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div
      style={{ margin: "1%", borderRadius: "7px", border: "1px solid gray" }}
    >
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "0px 10px",
        }}
      >
        <div style={{ margin: "1%" }}>
          ☰ <span style={{ marginLeft: "10px" }}>Product Attribute List</span>
        </div>
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            // title="SUBSCRIPTIONS LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Attribute_list;
