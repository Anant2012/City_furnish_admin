import { TfiViewList } from "react-icons/tfi";
import "./AddBanner.css";
const AddBanner = () => {
  const handleSubmit = () => {
    // TO DO
  };
  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> EDIT BANNER
            </caption>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>BANNER IMAGE</td>
              <td>
                <input type="file" accept="image/*" required />
              </td>
            </tr>
            <tr>
              <td>BANNER TEXT</td>
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
    </div>
  );
};
export default AddBanner;
