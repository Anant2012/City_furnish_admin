import DataTable from "react-data-table-component";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import "./Table.css";

// const Table = ({ columns, data, onSearch, title, selectableRows = true }) => {
  // const customStyles = {
  //   header: {
  //     style: {
  //       backgroundColor: "rgb(,204,204)",
  //       minHeight: "56px",
  //       paddingLeft: "16px",
  //       paddingRight: "8px",
  //     },
  //   },
  //   headCells : {
  //     style : {
  //       fontSize:"18px",
  //       fontFamily : "Dancing Script cursive"
  //     }
  //   }
  // };

const Table = ({
  columns,
  data,
  onSearch,
  title,
  selectableRows = true,
  actionButtons,
}) => {
  const [isRowsSelected, setIsRowsSelected] = useState(false);
  const customStyles = {
    cells:{
      style:{
        borderRightColor:'#d0d0d0',
        borderRightStyle:'solid',
        borderRightWidth:'1px'
      }
    },
    header: {
      style: {
        backgroundColor: "rgb(,204,204)",
        minHeight: "56px",
        paddingLeft: "16px",
        paddingRight: "8px",
      },
    },
    rows: {
      style: {
        fontSize: '13px',
        fontWeight: 400,
        backgroundColor: '#fff',
        ':last-of-type': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: 'black',
        },
        '&:nth-of-type(odd)':{
          backgroundColor:'#e2e4ff'
        }
      },
      highlightOnHoverStyle: {
        color: '#095e88',
        backgroundColor:'#b9beff',
        transitionDuration: '0.15s',
        transitionProperty: 'background-color',
        borderBottomColor: 'gray',
        fontWeight:'bold'
      },

},
headCells:{
style:{
  borderRightColor:'#d0d0d0',
  borderRightStyle:'solid',
  borderRightWidth:'1px',
  backgroundColor : "white"

}
},
  headRow: {
		style: {
      borderTopColor:'#d0d0d0',
      borderTopStyle:'solid',
      borderTopWidth:'1px',
			backgroundColor: '#f4f4f4',
			borderBottomWidth: '1px',
			borderBottomColor: 'black',
			borderBottomStyle: 'solid',
		}
	},

  };
  const handleRowsSelect = (selected) => {
    setIsRowsSelected(Boolean(selected.selectedCount));
  };
  return (
    <div className="w-full">
      <div className="w-[90%] flex flex-col  mx-auto">
        <div className="p-3 font-lora font-semibold tracking-wider text-2xl bg-baby_blue text-white ">
          <span style={{ marginLeft: "10px" }} >{title}</span>
        </div>

        <DataTable
          title={isRowsSelected ? title : ""}
          columns={columns}
          data={data}
          pagination
          selectableRows={selectableRows}
          onSelectedRowsChange={(selected) => handleRowsSelect(selected)}
          contextActions={actionButtons}
          selectableRowsHighlight
          highlightOnHover
          customStyles={customStyles}
          subHeader
          subHeaderComponent={
              <div className="flex items-center  px-2 py-1 rounded-md bg-slate-100">
                <input
                  type="text"
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Search"
                  className="flex flex-grow bg-slate-100 text-lg tracking-wide font-lora"
                />
                <AiOutlineSearch  className="text-gray-800" fontSize="large"/>
              </div>
          } 

        />
      </div>
    </div>
  );
};

export default Table;
