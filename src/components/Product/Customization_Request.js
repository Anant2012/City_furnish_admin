import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import EditButton from "../Common/ActionsButtons/EditButton";
import CheckButton from "../Common/ActionsButtons/CheckButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import AddButton from "../Common/ActionsButtons/AddButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";

const Customization_Request = () => {
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
    { name: "Phone", selector: (row) => row.population, sortable: true },
    { name: "Email", selector: (row) => row.capital, sortable: true },
    {
      name: "DAte Added ",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Prject Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Requirement",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Action",
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
    <div className="mt-3">
      <Table
        columns={columns}
        data={filteredData}
        onSearch={onSearch}
        title="Customization Request List"
      />
    </div>
  );
};
export default Customization_Request;
