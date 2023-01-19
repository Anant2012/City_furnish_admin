import { BannerListingItems } from "../../../constants/BannerListing";
import "./BannerListing.css";
import Banner from "./Banner";
import { TfiViewList } from "react-icons/tfi";

const BannerListing = () => {
  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> Banners List
            </caption>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Text</th>
              <th scope="col">Position</th>
              <th scope="col">Status</th>
              <th scope="col">Created On</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {BannerListingItems.map((item) => (
              <Banner item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannerListing;
