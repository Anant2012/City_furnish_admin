import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { AxiosInstance } from "../../AxiosInstance";
import ConfirmationModal from "../Common/ConfirmationModal/ConfirmationModal";
import UpdateButton from "../Common/ActionsButtons/UpdateButton";

const FilterList = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (row) => {
    setIsOpen(!isOpen);
    if (row) setSelectedRow(row);
  };
  const onConfirmation = () => {
    console.log("perform operation on ", selectedRow); // to do
    toggleModal();
  };
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.filter_name.toLowerCase().match(val.toLowerCase()))
    );
  };

  const columns = [
    { name: "Filter Name", selector: (row) => row.filter_name, sortable: true },
    { name: "Category Name ", selector: (row) => row.cat_name, sortable: true },
    {
      name: "SubCategory Name ",
      selector: (row) => row.subcategory,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => {
        const year = row.created_at.split("T")[0];
        const time = row.created_at.split("T")[1].split(".")[0];
        return year + " " + time;
      },
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>
        row.status === "active" ? (
          <button
            className="btn btn-secondary"
            onClick={() => toggleModal(row)}
          >
            Unpublish
          </button>
        ) : (
          <button className="btn btn-success" onClick={() => toggleModal(row)}>
            Publish
          </button>
        ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex">
          <UpdateButton />
        </div>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    AxiosInstance.get("/api/category/filterlist")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
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
        title="Filter Listing"
        selectableRows={false}
      />
      {isOpen && (
        <ConfirmationModal
          toggleModal={toggleModal}
          onConfirmation={onConfirmation}
        />
      )}
    </div>
  );
};
export default FilterList;
