import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
// import "./Style.css";

const Coin_Details = () => {
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
        <div>
          <FaUserEdit
            style={{
              width: "25px",
              height: "24px",
              color: "gray",
              //   marginLeft: "10px",
            }}
          />
          <BsPlusLg
            style={{
              width: "18px",
              height: "24px",
              color: "green",
              //   marginLeft: "10px",
            }}
          />
          <FcSearch
            style={{
              width: "25px",
              height: "24px",
              color: "gray",
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
        title="City Furnish Coins"
      />
    </div>
  );
};
export default Coin_Details;
