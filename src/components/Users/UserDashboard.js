import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";

const UserDashboard = () => {
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
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
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
    <div className="container-fluid mt-4">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div style={{ width: "100%", margin: "1%" }}>
            <div
              style={{
                padding: "10px 10px",
                fontWeight: "bold",
                backgroundColor: "#adb5bd",
              }}
            >
              <GrLineChart />
              <span style={{ margin: "0px 15px" }}>USERS DASHBOARD</span>
            </div>
            <div
              style={{
                fontWeight: "bold",
                backgroundColor: "lightgray",
                padding: "10px 10px",
              }}
            >
              81290 users registered in this site
            </div>
            <table className="rwd-table">
              <tr>
                <td>Active Users</td>
                <td className="tab">81289</td>
              </tr>
              <tr>
                <td>Inactive Users</td>
                <td className="tab">1</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            title="RECENT USERS"
            selectableRows={false}
          />
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
