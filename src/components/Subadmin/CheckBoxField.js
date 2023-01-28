const CheckBoxField = ({ isChecked = [], label, onChange, idx }) => {
  return (
    <div className="pl-4 pt-2 mb-3 mt-4 checkboxes-container ">
      <div style={{ marginBottom: "1%" }} className="font-semibold tracking-wide text-lg font-lora">
        {label} <span className="spans">*</span>
      </div>
      <div className="input checkboxes ml-[12%]">
        <div>
          <input
            type="checkbox"
            checked={isChecked[idx]?.[0]}
            onChange={() => onChange(idx, 0)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={isChecked[idx]?.[1]}
            onChange={() => onChange(idx, 1)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={isChecked[idx]?.[2]}
            onChange={() => onChange(idx, 2)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={isChecked[idx]?.[3]}
            onChange={() => onChange(idx, 3)}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxField;
