import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import EditButton from "../Common/ActionsButtons/EditButton";
import { AxiosInstance } from "../../AxiosInstance";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";

const UsersList = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.full_name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Full Name", selector: (row) => row.full_name, sortable: true },
    { name: "User Name ", selector: (row) => row.user_name, sortable: true },
    { name: "User ID", selector: (row) => row.id, sortable: true },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>
        row.status === "Active" ? (
          <button className="btn btn-success">Active</button>
        ) : (
          <button className="btn">Inactive</button>
        ),
      sortable: true,
    },
    {
      name: "Is Offline",
      selector: (row) => row.is_offline_user,
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
    },
  ];

  const getData = () => {
    AxiosInstance.get("/api/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
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
        title="USERS LIST"
      />
    </div>
  );
};
export default UsersList;
