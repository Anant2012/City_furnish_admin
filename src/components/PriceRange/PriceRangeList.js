import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { TfiViewList } from "react-icons/tfi";
import "./price.css";

const PriceRangeList = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Attribute Name", selector: (row) => row.name, sortable: true },
    { name: "Created Date", selector: (row) => row.population, sortable: true },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <FaUserEdit
            style={{
              width: "20px",
              height: "24px",
              color: "gray",
              //   marginLeft: "10px",
            }}
          />
          <MdDelete
            style={{
              width: "20px",
              height: "24px",
              color: "brown",
              //   marginLeft: "10px",
            }}
          />
        </div>
      ),
      sortable: true,
    },
  ];

  const getData = () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div class="container-fluid ">
      <div class="w-auto mt-3 ml-3">
        <div className="bg-baby_blue  font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider table-header">
          <TfiViewList className="mr-2"/>{" "} <span> PRICE RANGE LIST</span>
        </div>
        <div className="w-[100%] overflow-auto">
        <table className="table ">
          <thead>
            <tr style={{background:"white"}}>
              <th scope="col" >checkbox</th>
              <th scope="col" style={{minWidth:"120px"}}>Price Range</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {/* <tbody className="table-group-divider w-[100%] overflow-auto">
            {PriceRangeItems.map((item) => (
              <PriceRange item={item} />
            ))}
          </tbody> */}
        </table>
          </div>
      </div>
    </div>
  );
};
export default PriceRangeList;
