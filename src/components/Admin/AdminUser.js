import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Table from "../Common/Table/Table";

const AdminUser = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {

  };
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Admin Name", selector: (row) => <span className="font-lora tracking-wider text-gray-800 ">{row.name}</span>
    , sortable: true },
    { name: "Email ", selector: (row) => <span className="font-lora tracking-wider text-gray-800 ">{row.name}</span>, sortable: true },
    { name: "Admin Type", selector: (row) => <span className="font-lora tracking-wider text-gray-800 ">{row.capital}</span>, sortable: true },
    {
      name: "Last Login Date",
      selector: (row) => <span className="font-sourserif font-medium tracking-wider text-gray-800 text-md">{row.population}</span>,
      sortable: true,
    },
    {
      name: "Last Logout Date",
      selector: (row) => <span className="font-sourserif font-medium tracking-wider text-gray-800 text-md">{row.population}</span>,
      sortable: true,
    },
    {
      name: "Last Login IP",
      selector: (row) => <span className="font-sourserif font-medium tracking-wider text-gray-800 text-md">{row.population}</span>,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <span className="bg-green-300/30 text-green-600 font-medium p-2 rounded-xl tracking-wide hover:scale-110 duration-300 ">Active</span>,
      sortable: true,
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

  // 

  
  return (
    <div className="mt-3 ">
      <Table
        columns={columns}
        data={filteredData}
        onSearch={onSearch}
        title="Admin Users List"
      />
    </div>
  );
};
export default AdminUser;
