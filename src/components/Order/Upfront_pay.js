import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import "./pay.css";

const Upfront_pay = () => {
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
    { name: "Order Id", selector: (row) => row.population, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    {
      name: "User Email",
      selector: (row) => row.name,
      sortable: true,
    },
    { name: "Phone No", selector: (row) => row.population, sortable: true },
    {
      name: "Total",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Tenure",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Payment Link",
      selector: (row) => row.name,
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
    <div>
      <div
        style={{ margin: "1%", borderRadius: "7px", border: "1px solid gray" }}
      >
        <div
          style={{
            fontWeight: "bold",
            backgroundColor: "lightgray",
            border: "1px solid lightgray",
            padding: "10px",
          }}
        >
          ☰{" "}
          <span style={{ marginLeft: "10px" }}>
            UPFRONT PAYMENT LINK CREATION
          </span>
        </div>
        <div className="passed">
          <input
            type="password"
            required
            className="inputss"
            placeholder="Customer Name"
          ></input>
        </div>
        <div className="passed">
          <input
            type="password"
            required
            className="inputss"
            placeholder="Customer Email"
          ></input>
        </div>
        <div className="passed">
          <input
            type="password"
            required
            className="inputss"
            placeholder="Customer Phone No."
          ></input>
        </div>
        <div className="passed">
          <input
            type="password"
            required
            className="inputss"
            placeholder="Order Id"
          ></input>
        </div>
        <div className="passed">
          <input
            type="password"
            required
            className="inputss"
            placeholder="Amount"
          ></input>
        </div>
        <div className="passed">
          <input
            type="password"
            required
            className="inputss"
            placeholder="Tenure"
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "6px",
            }}
            className="butonss"
          >
            GENERATE LINK
          </button>
        </div>
      </div>
      <div
        style={{ margin: "1%", borderRadius: "7px", border: "1px solid gray" }}
      >
        <div>
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            title="ORDER LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Upfront_pay;
