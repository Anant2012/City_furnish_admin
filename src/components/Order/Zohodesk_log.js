import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Zohodesk_log = () => {
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
    { name: "#", selector: (row) => row.name, sortable: true },
    {
      name: "Error Reason",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Error Type",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Log File",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Created Datetime",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{display:"flex"}}>
          <FaUserEdit style={{ color: "gray" , marginRight:"2px",fontSize:"1.5em" }} />
          <MdDelete style={{ color: "brown",fontSize:"1.5em" }} />
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
            title="ZOHO DESK LOGS"
          />
        </div>
      </div>
    </div>
  );
};
export default Zohodesk_log;
