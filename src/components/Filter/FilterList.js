import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { AxiosInstance } from "../../AxiosInstance";
import { GrUpdate } from "react-icons/gr";
// import "./Style.css";

const FilterList = () => {
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
  ];
  // const columns = [
  //   { name: "Filter Name", selector: (row) => row.filter_name, sortable: true },
  //   { name: "Category Name ", selector: (row) => row.cat_name, sortable: true },
  //   { name: "SubCategory Name ", selector: (row) => row.subcategory, sortable: true },
  //   { name: "Created On", selector: (row) => row.created_at, sortable: true },
  //   {
  //     name: "Status",
  //     selector: (row) => <button className="btn btn-success">Publish</button>,
  //     sortable: true,
  //   },
  //   {
  //     name: "Action",
  //     selector: (row) => (
  //       <div>
  //       <GrUpdate style={{marginLeft:"10px"}} />
  //       </div>
  //     ),
  //     sortable: true,
  //   },
  //   // {
  //   //   name: "Action",
  //   //   cell: (row) => (
  //   //     <button
  //   //       onClick={() => handleOpen(row)}
  //   //       className="delete-icon"
  //   //       data-toggle="tooltip"
  //   //       data-placement="bottom"
  //   //       title="Delete"
  //   //     >
  //   //       <MdDelete />
  //   //     </button>
  //   //   ),
  //   // },
  // ];

  const getData = async () => {
    // AxiosInstance.get("/api/category/filterlist")
    AxiosInstance.get("/api/user")
      .then((res) => setData(res.data))
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
        title="Filter Listing"
      />
    </div>
      
  );
};
export default FilterList;
