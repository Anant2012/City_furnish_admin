import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import EditButton from "../Common/ActionsButtons/EditButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";

const Offer_List = () => {
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
    { name: "Coupon Code", selector: (row) => row.name, sortable: true },
    { name: "Discount Text ", selector: (row) => row.name, sortable: true },
    {
      name: "Position",
      selector: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Position here..."
            style={{
              width: "100%",
              fontSize: "13px",
              padding: "0.4rem 0.2rem",
              borderRadius: "0.5rem",
              border: "1px solid rgba(77,112,253,0.5)",
            }}
          />
          <div
            style={{
              color: "blue",
              marginLeft: "10px",
              cursor: "pointer",
              padding: "0.2rem",
              background: "rgba(77,112,253,0.3)",
              borderRadius: "0.2rem",
            }}
          >
            Update
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button className="btn btn-success">Publish</button>
        </div>
      ),
      sortable: true,
    },
    { name: "Created Date", selector: (row) => row.population, sortable: true },
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
        title="OFFER LIST"
      />
    </div>
  );
};
export default Offer_List;
