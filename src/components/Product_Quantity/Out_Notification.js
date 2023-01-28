import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import "./prod.css";

const Out_Notification = () => {
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
    { name: "Product Name", selector: (row) => row.name, sortable: true },
    {
      name: "SKU",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Customer Email",
      selector: (row) => row.capital,
      sortable: true,
    },
    {
      name: "Customer Id",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Request Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Publish</button>,
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

  const subHeader = (<div>
    <label className='m-0'>From: </label>
    <input
      type="date"
      placeholder="select start Date"
      style={{ margin: "1px 5px" }}
      className='px-2 py-1 rounded-md bg-slate-100'
    ></input>
    <label style={{marginLeft:'1rem'}} className=''>To: </label>
    <input
      type="date"
      placeholder="select end date"
      style={{ margin: "1px 5px" }}
      className='px-2 py-1 rounded-md bg-slate-100'
    ></input>
    <button style={{marginLeft:'1rem',padding:'0.2rem 0.5rem',border:'1px solid rgb(77,112,253)',color:'#095e88',borderRadius:'0.3rem',background:'rgba(77,112,253,0.3)'}} className="button">Search</button>
    <button style={{marginLeft:'1rem',padding:'0.2rem 0.5rem',border:'1px solid rgb(77,112,253)',color:'#095e88',borderRadius:'0.3rem',background:'rgba(77,112,253,0.3)'}} className="button">Export</button>
  </div>)
  return (
    
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            extraSubHeader={subHeader}
            // title="PRODUCT QUANTITY LIST"
            title="OUT OF NOTIFICATION REQUEST LIST"
          />
        </div>
    );

};
export default Out_Notification;
