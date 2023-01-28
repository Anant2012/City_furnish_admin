import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import EditButton from "../Common/ActionsButtons/EditButton";
import CheckButton from "../Common/ActionsButtons/CheckButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import AddButton from "../Common/ActionsButtons/AddButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";

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
        <div className="d-flex">
          <EditButton />
          <CheckButton />
          <ViewButton />
          <AddButton />
          <DeleteButton />
        </div>
      ),
      sortable: true,
    },
  ];

  const getData = async () => {
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
