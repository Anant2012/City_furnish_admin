import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";

const Coin_List = () => {
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
      name: "USER Email",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Customer Id",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Ticket",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Payment mode",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Txnid",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Mode",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.population,
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
        <div>
          <div className="bot">
            <div style={{ margin: "1%" }}>
              ☰{" "}
              <span style={{ marginLeft: "10px" }}>COIN TRANSACTION LIST </span>
            </div>
            <div>
              <label>From: </label>
              <input
                type="date"
                placeholder="select start Date"
                style={{ margin: "1px 5px" }}
              ></input>
              <label>To: </label>
              <input
                type="date"
                placeholder="select end date"
                style={{ margin: "1px 5px" }}
              ></input>
              <button className="button">Search</button>
              <button className="button">Export</button>
            </div>
          </div>
          {/* <div style={{ fontWeight: "normal", marginLeft: "12px" }}>
            Status
            <select style={{ marginLeft: "10px" }}>
              <option value="All">All</option>

              <option value="Publish">Publish</option>

              <option value="UnPublish">UnPublish</option>
            </select>
          </div> */}
        </div>
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            // title="PRODUCT QUANTITY LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Coin_List;
