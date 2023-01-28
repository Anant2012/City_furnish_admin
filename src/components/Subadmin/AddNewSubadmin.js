import { useEffect, useState } from "react";
import { AddNewSubadminDummyData } from "../../constants/AddNewSubadminDummyData";
import CheckBoxField from "./CheckBoxField";
import "./Style.css";

const AddNewSubadmin = () => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    const res = AddNewSubadminDummyData.map(() => [false, false, false, false]);
    setIsChecked(res);
  }, []);

  const handleSingleCheckBox = (idx, innerIdx) => {
    if (isAllSelected) setIsAllSelected(false);
    isChecked[idx][innerIdx] = !isChecked[idx][innerIdx];
    setIsChecked([...isChecked]);
  };
  const handleSelectAll = () => {
    const res = AddNewSubadminDummyData.map(() => [
      !isAllSelected,
      !isAllSelected,
      !isAllSelected,
      !isAllSelected,
    ]);
    setIsChecked(res);
    setIsAllSelected(!isAllSelected);
  };

  return (
    <div
      className="bg-white mx-auto w-[70%] mt-12"
    >
      <div
        className="bg-baby_blue font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider"
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD SUBADMIN</span>
      </div>
      <div className="pl-4 pt-2 mb-3 mt-4 font-semibold tracking-wide text-lg font-lora flex  space-x-[12%]" >
        <div style={{ marginBottom: "1%" }}>
          EMAIL ADDRESS <span className="spans">*</span>
        </div>
          <input type="email" required className="input"></input>
      </div>
      <div className="pl-4 pt-2 mb-3 mt-4 font-semibold tracking-wide text-lg font-lora space-x-[12%] flex">
        <div style={{ marginBottom: "1%" }}>
          SUB ADMIN NAME <span className="spans">*</span>
        </div>
          <input type="text" required className="input"></input>
      </div>
      <div className="pl-4 pt-2 mb-3 mt-4 font-semibold tracking-wide text-lg font-lora flex space-x-[12%]">
        <div style={{ marginBottom: "1%" }}>
          PASSWORD <span className="spans">*</span>
        </div>
          <input type="password" required className="input" />
      </div>

      <div className="">
        <div className="input ml-[12%]">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isAllSelected}
          />
          <span
            style={{
              marginLeft: "10px",
              fontSize: "12px",
            }}
            className="font-semibold tracking-wide text-xl font-lora"
          >
            Select All
          </span>
        </div>
      </div>

      <div className="pl-4 pt-2 mb-3 mt-4 checkboxes-container">
        <div style={{ marginBottom: "1%" }} className="font-semibold tracking-wide text-lg font-lora">
          MANGEMENT NAME <span className="spans">*</span>
        </div>
        <div className="input checkboxes ml-[12%]">
          <div className="font-semibold tracking-wide text-md font-lora">View</div>
          <div className="font-semibold tracking-wide text-md font-lora">Add</div>
          <div className="font-semibold tracking-wide text-md font-lora">Edit</div>
          <div className="font-semibold tracking-wide text-md font-lora">Delete</div>
        </div>
      </div>
      {AddNewSubadminDummyData.map((item, idx) => (
        <CheckBoxField
          label={item.label}
          isChecked={isChecked}
          onChange={handleSingleCheckBox}
          idx={idx}
        />
      ))}
      <div className="buton">
      <button className=" w-[20%] ml-[23%] h-10 bg-baby_blue text-white rounded-lg  mt-10 mb-4 hover:scale-105 duration-300 hover:bg-sky-700" 
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNewSubadmin;
