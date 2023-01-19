import Page from "./Page";
import { TfiViewList } from "react-icons/tfi";
import { PageListingItems } from "../../constants/PagesListing";

const PagesListing = () => {
  return (
    <div class="container-fluid">
      <div class="w-auto mt-3 ml-3">
        <table class="table">
          <thead>
            <caption>
              <TfiViewList /> STATIC PAGES
            </caption>
            <tr>
              <th></th>
              <th scope="col">Page Name</th>
              <th scope="col">Page URL</th>
              <th scope="col">Category</th>
              <th scope="col">Hidden Page</th>
              <th scope="col">Priority</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {PageListingItems.map((item) => (
              <Page item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagesListing;
