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

          className="bg-baby_blue font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wide rounded-sm"

        >
          
          <span className = "span-heading">
          ☰ {"  "} UPFRONT PAYMENT LINK CREATION
          </span>
        </div>
        <div className="upfront">

          <div>
            <input
              type="password"
              required
              className="w-1/2 bg-slate-50 rounded-sm py-2 px-3 shadow-sm mb-2 mt-2 min-w-fit"
              placeholder="Customer Name"
            ></input>
          </div>
          <div>
            <input
              type="password"
              required
              className="w-2/4 -sm py-2 px-3 shadow-sm mb-2 min-w-fit"
              placeholder="Customer Email"
            ></input>
          </div>
          <div>
            <input
              type="password"
              required
              className="w-2/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm mb-2 min-w-fit"
              placeholder="Customer Phone No."
            ></input>
          </div>
          <div>
            <input
              type="password"
              required
              className="w-2/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm mb-2 min-w-fit"
              placeholder="Order Id"
            ></input>
          </div>
          <div>
            <input
              type="password"
              required
              className=" w-2/4 bg-slate-50 rounded-sm py-2 px-3 shadow-sm mb-2 min-w-fit"
              placeholder="Amount"
            ></input>
          </div>
          <div>
            <input
              type="password"
              required
              className="w-1/3 bg-slate-50 rounded-sm py-2 px-3 shadow-sm mb-2 min-w-fit"
              placeholder="Tenure"
            ></input>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className=" w-1/6 h-10 min-w-fit bg-baby_blue text-white rounded-lg  mt-6 mb-4 pl-1 pr-1 hover:scale-105 duration-300 hover:bg-sky-700"
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
