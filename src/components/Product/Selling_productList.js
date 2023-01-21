import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import {MdDelete} from "react-icons/md"
// import "./Style.css";

const Selling_productList = () => {
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
    { name: "Product Order", selector: (row) => row.capital, sortable: true },
    { name: "SKU ", selector: (row) => row.name, sortable: true },
    {
      name: "Image",
      selector: (row) => <img src={row.flag} style={{ width: "40px" }} />,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Likes",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Remain",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Purchased",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Publish</button>,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <FaUserEdit
            style={{ width: "16px", height: "24px", color: "gray" }}
          />
          <BsCheckLg style={{ width: "16px", height: "24px", color: "green" }} />
          <AiFillEye
            style={{ width: "16px", height: "24px", color: "brown" }}
          />
          <BsPlusLg
            style={{ width: "16px", height: "24px", color: "green" }}
          />
          <MdDelete style={{ width: "15px", height: "24px", color: "brown" }}/>
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

        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            title="Selling Product List"
          />
        </div>
      
  );
};
export default Selling_productList;
