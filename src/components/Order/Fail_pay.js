import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
// import { FaUserEdit } from "react-icons/fa";
// import { BsPlusLg } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { CgDanger } from "react-icons/cg";
// import { BsCheckLg } from "react-icons/bs";
// import { ImCross } from "react-icons/im";

const Fail_pay = () => {
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
    { name: "Order Id", selector: (row) => row.name, sortable: true },
    {
      name: "User Email",
      selector: (row) => row.name,
      sortable: true,
    },
    { name: "User Phone", selector: (row) => row.population, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Transaction Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Payment Type",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <input type="number" style={{ width: "70px" }} />
          <div style={{ color: "blue", marginLeft: "10px" }}>Update</div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <AiFillEye
            style={{ width: "20px", height: "24px", color: "brown" }}
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
      style={{ margin: "1%", borderRadius: "7px" }}
    >
      <div
      >
        <div
        >
          {/* <div>
            ☰{" "}
            <span style={{ marginLeft: "10px" }}>
              Affiliate Product Order List
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
            title="ORDER LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Fail_pay;
