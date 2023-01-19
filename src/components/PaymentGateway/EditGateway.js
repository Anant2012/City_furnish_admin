import { TfiViewList } from "react-icons/tfi";
import { useState } from "react";
const EditGateway = () => {
  const handleSubmit = () => {
    // To Do
  };
  const [clientId, setClientId] = useState("dummy data");
  const [clientToken, setClientToken] = useState("dummy data");

  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> CASHGRAM
            </caption>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>MODE</td>
              <td>
                <input type="file" accept="image/*" required />
              </td>
            </tr>
            <tr>
              <td>CLIENT ID</td>
              <td>
                <input
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>CLIENT TOKEN</td>
              <td>
                <input
                  type="text"
                  value={clientToken}
                  onChange={(e) => setClientToken(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td class="border-none"></td>
              <td class="border-none">
                <button onClick={handleSubmit}>Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EditGateway;
