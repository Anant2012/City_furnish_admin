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
      style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}
    >
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "10px",
        }}
      >
        ☰ <span style={{ marginLeft: "10px" }}>ADD SUBADMIN</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          EMAIL ADDRESS <span className="spans">*</span>
        </div>
        <div>
          <input type="email" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          SUB ADMIN NAME <span className="spans">*</span>
        </div>
        <div>
          <input type="text" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          PASSWORD <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input" />
        </div>
      </div>

      <div className="pass">
        <div className="input">
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
          >
            Select All
          </span>
        </div>
      </div>

      <div className="pass checkboxes-container">
        <div style={{ marginBottom: "1%" }}>
          MANGEMENT NAME <span className="spans">*</span>
        </div>
        <div className="input checkboxes">
          <div>View</div>
          <div>Add</div>
          <div>Edit</div>
          <div>Delete</div>
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
        <button
          style={{
            color: "white",
            backgroundColor: "#1876ba",
            border: "none",
            padding: "6px",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AddNewSubadmin;
