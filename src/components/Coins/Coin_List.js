import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";

const Coin_List = () => {
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
    { name: "Order Id", selector: (row) => row.population, sortable: true },
    {
      name: "USER Email",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Customer Id",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Ticket",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Payment mode",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Txnid",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Mode",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.population,
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
            title="COIN TRANSACTION LIST"
            extraSubHeader={subHeader}
          />
        </div>

  );
};
export default Coin_List;
       
