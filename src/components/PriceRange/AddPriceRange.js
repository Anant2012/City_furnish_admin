import { TfiViewList } from "react-icons/tfi";

const handleSubmit = ()=>{
  //
}

const AddPriceRange = ({ isEditingPage }) => {
  return (
    // <></>
    <div class="container-fluid">
      <div class="w-auto mt-3">
      <div className="bg-baby_blue  font-lora text-2xl py-3 px-2 text-white font-semibold tracking-wider table-header">
          <TfiViewList className="mr-2"/>{" "} <span>{isEditingPage ? "EDIT PRICE RANGE" : "ADD PRICE RANGE"}</span>
        </div>
        <table class="table">
          {/* <thead>
            <caption>
              <TfiViewList />{" "}
              {isEditingPage ? "EDIT PRICE RANGE" : "ADD PRICE RANGE"}
            </caption>
          </thead> */}
          <tbody class="table-group-divider">
            <tr>
              <td className="text-xs md:text-lg px-0 w-[60%]">PRICE RANGE FROM</td>
              <td>
                <input type="text" required />
              </td>
            </tr>
            <tr>
              <td className="text-xs md:text-lg">PRICE RANGE TO</td>
              <td>
                <input type="text" required />
              </td>
            </tr>
            <tr>
              <td class="border-none"></td>
              <td class="border-none">
                <button className="w-1/5 min-w-fit h-10 bg-baby_blue text-white rounded-lg  mt-6 mb-4 hover:scale-105 duration-300 hover:bg-sky-700" onClick={handleSubmit}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddPriceRange;
