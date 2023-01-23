import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
// import { AiOutlinePlus } from "react-icons/ai";
// import { BsCheck } from "react-icons/bs";
// import { FaUserEdit } from "react-icons/fa";

const Default = () => {
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
    {
      name: "Order Id",
      selector: (row) => row.population,
      sortable: true,
    },
    { name: "User Email", selector: (row) => row.name, sortable: true },
    { name: "Phone No", selector: (row) => row.population, sortable: true },

    {
      name: "Order Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Transaction ID",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Last Updated ON",
      selector: (row) => <p style={{ marginLeft: "20px" }}>N/A</p>,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => <button>Mark Defaulter</button>,
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
    <div style={{ margin: "1%", borderRadius: "7px" }}>
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "0px 10px",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          ☰ <span style={{ marginLeft: "10px" }}>Defaulter</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search order/customer email/phone no."
            style={{ width: "30%", padding: "5px", outline: "none" }}
          />
          <button style={{ padding: "5px", marginLeft: "10px" }}>Search</button>
        </div>
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            // title="DEFAULTERS"
          />
        </div>
      </div>
    </div>
  );
};
export default Default;
