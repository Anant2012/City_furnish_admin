
import "./AddFilter.css";
const AddFilter = () => {
  const handleSubmit = () => {
    // TO DO
  };
  return (

    <div style={{ margin: "3%", borderRadius: "7px", border: "1px solid gray" }}>
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "10px",
        }}
      >
        ☰ <span style={{ marginLeft: "10px" }}>Add New Filter</span>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          Category <span className="spans">*</span>
        </div>
        <select name="page" id="page" className="input">
          <option value="combos">
            Combos
          </option>
          <option value="appliances">Appliances</option>
          <option value="home_furniture">Home Furniture</option>
          <option value="our_picks">Our Picks</option>
          <option value="office_furniture">Office Furniture</option>
          <option value="addon">Addon</option>
          <option value="citymax">Citymax</option>
          <option value="furniture_sale">Furniture Sale</option>
        </select>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          Sub Category <span className="spans">*</span>
        </div>
        <select name="page" id="page" className="input">
          <option value="sub">
            Select Sub Category
          </option>
          <option value="bedroom">Bedroom</option>
          <option value="living_room">Living Room</option>
          <option value="dining_room">Dining Room</option>
          <option value="study_room">Study Room</option>
          <option value="appliances">Appliances</option>
          <option value="value_combo">Value Combo</option>
        </select>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          Filter Name <span className="spans">*</span>
        </div>
        <div>
          <input type="password" required className="input"></input>
        </div>
      </div>
      <div className="pass">
        <div style={{ marginBottom: "1%" }}>
          Status <span className="spans">*</span>
        </div>
        <div class="can-toggle publish">
          <input id="a" type="checkbox" />
          <label for="a">
            <div
              class="can-toggle__switch"
              data-checked="Publish"
              data-unchecked="UnPublish"
            ></div>
          </label>
        </div>

      </div>
      <div className="buton">
        <button
          style={{
            color: "white",
            backgroundColor: "#1876ba",
            border: "none",
            padding: "6px",
          }}
        >
          Submit
        </button>
      </div>
    </div>

  );
};
export default AddFilter;
