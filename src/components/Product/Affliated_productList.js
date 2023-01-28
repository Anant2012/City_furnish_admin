import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { BsPlusLg } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { RiArrowUpDownLine } from "react-icons/ri";
import "./productList.css";
import EditButton from "../Common/ActionsButtons/EditButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import AddButton from "../Common/ActionsButtons/AddButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";

const Affliated_productList = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleViewClick = () => {
    // to do
  };
  const handleEditClick = () => {
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
      name: "Image",
      selector: (row) => <img src={row.flag} style={{ width: "40px" }} />,
      sortable: true,
    },
    { name: "Website", selector: (row) => row.capital, sortable: true },
    {
      name: "Position",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <input
            type="number"
            style={{ width: "70px", border: "1px solid lightblue" }}
          />
          <div style={{ color: "blue", marginLeft: "10px" }}>
            <RiArrowUpDownLine />
          </div>
        </div>
      ),
      sortable: true,
    },
    { name: "Added By", selector: (row) => row.name, sortable: true },
    {
      name: "Likes",
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
        <div className="d-flex">
          <EditButton />
          <ViewButton />
          <AddButton />
          <DeleteButton />
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
        <div
          style={{
            display: "flex",
            margin: "1%",
            justifyContent: "space-between",
          }}
        >
          <div>
            ☰{" "}
            <span style={{ marginLeft: "10px" }}>
              Affiliate Product Order List
            </span>
          </div>
          <div>
            <button className="button">
              <BsPlusLg />
              Categorize
            </button>
            <button className="button">
              <CgDanger />
              DeCategorize
            </button>
            <button className="button">
              <BsPlusLg />
              Globalize
            </button>
            <button className="button">
              <CgDanger />
              Localize
            </button>
            <button className="button">
              <BsCheckLg />
              Publish
            </button>
            <button className="button">
              <CgDanger />
              UnPublish
            </button>
            <button className="button">
              <ImCross />
              Delete
            </button>
          </div>
        </div>
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            // title="SUBSCRIPTIONS LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Affliated_productList;
