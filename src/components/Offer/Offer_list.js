import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import "./Style.css";

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
        <div>
          <input type="number" style={{ width: "70px" }} />
          <div style={{ color: "blue", marginLeft: "10px" }}>Update</div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Publish</button>,
      sortable: true,
    },
    { name: "Created Date", selector: (row) => row.population, sortable: true },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <FaUserEdit
            style={{
              width: "25px",
              height: "24px",
              color: "gray",
              //   marginLeft: "10px",
            }}
          />
          <MdDelete
            style={{
              marginLeft:"10px",
              width: "25px",
              height: "24px",
              color: "brown",
              //   marginLeft: "10px",
            }}
          />
        </div>
      ),
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button
    //       onClick={() => handleOpen(row)}
    //       className="delete-icon"
    //       data-toggle="tooltip"
    //       data-placement="bottom"
    //       title="Delete"
    //     >
    //       <MdDelete />
    //     </button>
    //   ),
    // },
  ];

  const getData = async () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("errorr", err));

    // try {
    //   // console.log(userId);
    //   const url = "https://restcountries.com/v2/all";
    //   const response = await axios.get(url);
    //   if (response.status === 200) {
    //     console.log("wer", response.data);
    //     setData(data);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
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
