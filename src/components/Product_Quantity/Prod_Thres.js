import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { AiOutlinePlus } from "react-icons/ai";
import "./prod.css";

const Prod_Thres = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Product Name", selector: (row) => row.name, sortable: true },
    {
      name: "Image ",
      selector: (row) => <img src={row.flag} style={{ width: "40px" }} />,
      sortable: true,
    },
    {
      name: "Banglore Threshold",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Delhi Threshold",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Ghaziabad/Noida Threshold",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Gurgaon Threshold",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Hyderabad Threshold",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Mumbai Threshold",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Pune Threshold",
      selector: (row) => row.population,
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Publish</button>,
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
        title="PRODUCT THRESHOLD QUANTITY"
      />
    </div>
  );
};
export default Prod_Thres;
