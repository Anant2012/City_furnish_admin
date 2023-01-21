import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import "./prod.css";

const Prod_Buffer = () => {
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
    { name: "Product Name", selector: (row) => row.name, sortable: true },
    {
      name: "Image ",
      selector: (row) => <img src={row.flag} style={{ width: "40px" }} />,
      sortable: true,
    },
    {
      name: "Banglore Buffer",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Delhi Buffer",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Ghaziabad/Noida Buffer",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Gurgaon Buffer",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Hyderabad  Buffer",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Mumbai  Buffer",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Pune Buffer",
      selector: (row) => row.population,
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Publish</button>,
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
          <div style={{ margin: "1%" }}>
            ☰{" "}
            <span style={{ marginLeft: "10px" }}>PRODUCT BUFFER QUANTITY </span>
          </div>
          <div style={{ fontWeight: "normal", marginLeft: "12px" }}>
            Status
            <select style={{ marginLeft: "10px" }}>
              <option value="All">All</option>

              <option value="Publish">Publish</option>

              <option value="UnPublish">UnPublish</option>
            </select>
          </div>
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
export default Prod_Buffer;
