import { TfiViewList } from "react-icons/tfi";
import "./AddSubPage.css";
const AddSubPage = ({ isMainPage = false }) => {
  const handleSubmit = () => {
    // to do
  };
  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> ADD NEW {isMainPage ? "MAIN" : "SUB"} PAGE
            </caption>
          </thead>
          <tbody class="table-group-divider">
            {!isMainPage && (
              <tr>
                <td>SELECT MAIN PAGE</td>
                <td>
                  <select name="page" id="page">
                    <option value="friends_and_partner">
                      Friends And Partner
                    </option>
                    <option value="rental_agreement">Rental Agreement</option>
                  </select>
                </td>
              </tr>
            )}
            <tr>
              <td>PAGE NAME</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>PAGE TITLE</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>DESCRIPTION</td>
              <td>
                <input type="text" required />
              </td>
            </tr>
            <tr>
              <td>HIDDEN PAGE</td>
              <td>
                <div class="can-toggle">
                  <input id="a" type="checkbox" />
                  <label for="a">
                    <div
                      class="can-toggle__switch"
                      data-checked="Yes"
                      data-unchecked="No"
                    ></div>
                  </label>
                </div>
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

export default AddSubPage;
