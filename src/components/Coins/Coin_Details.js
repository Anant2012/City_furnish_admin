import { useEffect, useState } from "react";
import AddButton from "../Common/ActionsButtons/AddButton";
import EditButton from "../Common/ActionsButtons/EditButton";
import Table from "../Common/Table/Table";
import { FcSearch } from "react-icons/fc";

const Coin_Details = () => {
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
    { name: "USER Id", selector: (row) => row.population, sortable: true },
    { name: "USER Name ", selector: (row) => row.name, sortable: true },
    {
      name: "USER Email",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Coin Balance",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Last Wallet Updated Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Wallet Created Date",
      selector: (row) => row.population,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex">
          <EditButton />
          <AddButton />
          <FcSearch
            style={{
              width: "25px",
              height: "24px",
              color: "gray",
              marginLeft: "10px",
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
    <div className="mt-3">
      <Table
        columns={columns}
        data={filteredData}
        onSearch={onSearch}
        title="City Furnish Coins"
      />
    </div>
  );
};
export default Coin_Details;
