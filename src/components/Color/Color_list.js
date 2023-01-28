import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import EditButton from "../Common/ActionsButtons/EditButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";

const Color_list = () => {
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
    { name: "Color Name", selector: (row) => row.name, sortable: true },
    { name: "Product", selector: (row) => row.population, sortable: true },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex">
          <EditButton />
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
        title="COLOR LIST"
      />
    </div>
  );
};
export default Color_list;
