import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
// import { AiOutlinePlus } from "react-icons/ai";
// import { BsCheck } from "react-icons/bs";
// import { FaUserEdit } from "react-icons/fa";

const Tenure_Ext = () => {
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
    {
      name: "Email id",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Sales Order No",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Pickup Due Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "tenure Opted",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Payment Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Transaction ID",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Ticket Id",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Total Payable",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => <button style={{ border: "none" }}>Send</button>,
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
      // style={{
      //   fontWeight: "bold",
      //   backgroundColor: "lightgray",
      //   border: "1px solid lightgray",
      //   padding: "0px 10px",
      // }}
      >
        <div
          style={
            {
              // display: "flex",
              // margin: "1%",
              // justifyContent: "space-between",
            }
          }
        >
          {/* <div>
            ☰{" "}
            <span style={{ marginLeft: "10px" }}>
               Order List
            </span>
          </div> */}
          {/* <div>
            <button>
              <BsPlusLg />
              Categorize
            </button>
            <button>
              <CgDanger />
              DeCategorize
            </button>
            <button>
              <BsPlusLg />
              Globalize
            </button>
            <button>
              <CgDanger />
              Localize
            </button>
            <button>
              <BsCheckLg />
              Publish
            </button>
            <button>
              <CgDanger />
              UnPublish
            </button>
            <button>
              <ImCross />
              Delete
            </button>
          </div> */}
        </div>
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            title="TENURE EXTENSION LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Tenure_Ext;
