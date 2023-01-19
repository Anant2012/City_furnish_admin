import { TfiViewList } from "react-icons/tfi";
const UpdateBanner = () => {
  const handleSubmit = () => {
    // To Do
  };
  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> ADD BANNER
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
              <td>CURRENT IMAGE</td>
              <td>
                <img src="https://cdn1.smartprix.com/rx-iGNlyOFEo-w1200-h1200/GNlyOFEo.jpg" alt="Loading.." />
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
export default UpdateBanner;
