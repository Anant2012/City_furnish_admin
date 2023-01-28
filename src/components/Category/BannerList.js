import { useEffect, useState } from "react";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";
import EditButton from "../Common/ActionsButtons/EditButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import Table from "../Common/Table/Table";

const BannerList = () => {
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
    { name: "Sub Admin Name", selector: (row) => row.name, sortable: true },
    { name: "Email ", selector: (row) => row.name, sortable: true },
    { name: "Admin Type", selector: (row) => row.capital, sortable: true },
    {
      name: "Last Login Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Last Logout Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Last Login IP",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Status",
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
        title="BANNER LIST"
      />
    </div>
  );
};
export default BannerList;
