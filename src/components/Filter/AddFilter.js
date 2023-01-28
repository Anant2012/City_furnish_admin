
import "./AddFilter.css";
const AddFilter = () => {
  const handleSubmit = () => {
    // TO DO
  };
  return (

    <div className="w-[100%] h-[100%] flex item-center justify-center">
      <div 
        className = "rounded-sm border-1 border-blue-500 m-3 addFilter"
      >
        <div
          className="bg-baby_blue rounded-t-sm font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider "
        >
          ☰ <span style={{ marginLeft: "10px" }}>Add New Filter</span>
        </div>
        <div className="pass">
          <div style={{ marginBottom: "1%" }} className = "pass-left">
            Category <span className="spans">*</span>
          </div>
          <select name="page" id="page" className="pass-right w-1/6 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm">
            <option value="combos">
              Combos
            </option>
            <option value="appliances" >Appliances</option>
            <option value="home_furniture">Home Furniture</option>
            <option value="our_picks">Our Picks</option>
            <option value="office_furniture">Office Furniture</option>
            <option value="addon">Addon</option>
            <option value="citymax">Citymax</option>
            <option value="furniture_sale">Furniture Sale</option>
          </select>
        </div>
        <div className="pass">
          <div style={{ marginBottom: "1%" }} className = "pass-left">
            Sub Category <span className="spans">*</span>
          </div>
          <select name="page" id="page" className="pass-right w-1/6 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm">
            <option value="sub">
              Sub Category
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
          <div style={{ marginBottom: "1%" }} className = "pass-left">
            Filter Name <span className="spans">*</span>
          </div>
          <div className="pass-right">
            <input type="text" required className=" w-1/5 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"></input>
          </div>
        </div>
        <div className="pass">
          <div style={{ marginBottom: "1%" }} className = "pass-left">
            Status <span className="spans">*</span>
          </div>
          <div className="pass-right can-toggle " >
            <input id="a" type="checkbox" className="  w-1/4 min-w-fit bg-slate-50 rounded-sm py-2 px-3 shadow-sm"/>
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
            className="w-1/2 ml-[30%] h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>


  );
};
export default AddFilter;
