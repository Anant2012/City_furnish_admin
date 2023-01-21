import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";
import "./Style.css";

const OrderStatusNotification = () => {
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
    { name: "Email Adress", selector: (row) => row.name, sortable: true },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => handleOpen(row)}
          className="delete-icon"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Delete"
        >
          <MdDelete />
        </button>
      ),
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
    <div className="container-fluid mt-3">
      <Table
        columns={columns}
        data={filteredData}
        onSearch={onSearch}
        title="ALL NOTIFICATIONS"
      />
    </div>
  );
};
export default OrderStatusNotification;
