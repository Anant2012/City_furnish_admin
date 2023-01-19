import { TfiViewList } from "react-icons/tfi";
import { PaymentGatewayItems } from "../../constants/PaymentGateway";
import PaymentItem from "./PaymentItem";
const Payment = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="w-auto mt-3 ml-3">
          <table class="table">
            <thead>
              <caption>
                <TfiViewList /> PAYMENT GATEWAY
              </caption>
              <tr>
                <th scope="col"></th>
                <th scope="col">Gateway Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {PaymentGatewayItems.map((item) => (
                <PaymentItem item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payment;
