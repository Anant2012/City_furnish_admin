import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
// import { AiOutlinePlus } from "react-icons/ai";
// import { BsCheck } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const Bulk_Order = () => {
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
    { name: "#", selector: (row) => row.name, sortable: true },
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "User Email",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "User Phone",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Message",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <FaTrash style={{ marginLeft: "10px", color: "brown" }} />
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
        title="BULK ORDER "
      />
    </div>
  );
};
export default Bulk_Order;
