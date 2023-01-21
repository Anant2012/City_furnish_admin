import DataTable from "react-data-table-component";
import { AiOutlineSearch } from "react-icons/ai";
import "./Table.css";

const Table = ({ columns, data, onSearch, title, selectableRows = true }) => {
  const customStyles = {
    header: {
      style: {
        backgroundColor: "rgb(,204,204)",
        minHeight: "56px",
        paddingLeft: "16px",
        paddingRight: "8px",
      },
    },
  };
  return (
    <div className="table-container">
      <div className="data-table">
        <div className="table-title">
          ☰ <span style={{ marginLeft: "10px" }}>{title}</span>
        </div>
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows={selectableRows}
          selectableRowsHighlight
          highlightOnHover
          customStyles={customStyles}
          subHeader
          subHeaderComponent={
            <div>
              Search:
              <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search..."
                className="m-2"
              />
              <span className="search-icon">
                <AiOutlineSearch />
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Table;
