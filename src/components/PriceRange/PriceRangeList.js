import { TfiViewList } from "react-icons/tfi";
import { PriceRangeItems } from "../../constants/PriceRangeItems";
import PriceRange from "./PriceRange";

const PriceRangeList = () => {
  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> PRICE RANGE LIST
            </caption>
            <tr>
              <th scope="col"></th>
              <th scope="col">Price Range</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {PriceRangeItems.map((item) => (
              <PriceRange item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PriceRangeList;
