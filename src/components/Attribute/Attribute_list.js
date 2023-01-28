import { useEffect, useState } from "react";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";
import EditButton from "../Common/ActionsButtons/EditButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import Table from "../Common/Table/Table";

const Attribute_list = () => {
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
        <div className="d-flex">
          <EditButton />
          <ViewButton />
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
        title="Product Attribute List"
      />
    </div>
  );
};
export default Attribute_list;
