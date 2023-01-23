import { TfiViewList } from "react-icons/tfi";
const AddPriceRange = ({ isEditingPage = false }) => {
  const handleSubmit = () => {
    // to do
  };
  return (
    // <></>
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList />{" "}
              {isEditingPage ? "EDIT PRICE RANGE" : "ADD PRICE RANGE"}
            </caption>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>PRICE RANGE FROM</td>
              <td>
                <input type="text" required />
              </td>
            </tr>
            <tr>
              <td>PRICE RANGE TO</td>
              <td>
                <input type="text" required />
              </td>
            </tr>
            <tr>
              <td class="border-none"></td>
              <td class="border-none">
                <button onClick={handleSubmit}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    // </div>
  );
};
export default AddPriceRange;
