import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { AiOutlinePlus } from "react-icons/ai";
import "./prod.css";

const Prod_Quan = () => {
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
      name: "Banglore Remain",
      selector: (row) => row.population,
      sortable: true,
    },
    { name: "Delhi Remain", selector: (row) => row.population, sortable: true },
    { name: "Pune Remain", selector: (row) => row.population, sortable: true },
    {
      name: "Mumbai Remain",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Gurgaon Remain",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Ghaziabad/Noida Remain",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Hyderabad Remain",
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
        <div className="but">
          <div style={{ margin: "1%" }}>
            ☰ <span style={{ marginLeft: "10px" }}>PRODUCT QUANTITY LIST</span>
          </div>
          <div>
            <button className="button">
              <AiOutlinePlus />
              Import
            </button>
            <button className="button">
              <AiOutlinePlus />
              Export
            </button>
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
export default Prod_Quan;
