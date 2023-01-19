// import { TfiViewList } from "react-icons/tfi";
import React from "react";
import "./FilterList.css";
const FilterList = () => {
  // const handleSubmit = () => {
  //   // TO DO
  // };
  return
  (
    <>
      <div className="header">
        <h5 id="tableinf">Filter Listing</h5>
        <div>
          <label>show</label>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <label>entries</label>
          <input className="searchBar" type="text" placeholder="Search"></input>
        </div>
        <div className="filtertable">
          <table>
            <tr>
              <th>Filter Name</th>
              <th>Category Name</th>
              <th>SubCategory Name</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>WorkStation</td>
              <td>Office Furniture</td>
              <td>--</td>
              <td>2022-11-24</td>
              <td><button id="publish">publish</button></td>
              <td><button id="icon"></button></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )

};
export default FilterList;
