import CheckButton from "../Common/ActionsButtons/CheckButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";
import EditButton from "../Common/ActionsButtons/EditButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import "./categoryList.css";

const SubCategory = ({ subCategory }) => {
  return (
    <div className="sub-category">
      <div className="category-name">
        <input type="checkbox" />
        &nbsp;&nbsp;
        {subCategory.cat_name}&nbsp;&nbsp;&nbsp;
        {`(${subCategory.cat_position})`}
      </div>
      <div className="d-flex justify-content-end subcategory-actions">
        <CheckButton />
        <EditButton />
        <ViewButton />
        <DeleteButton />
      </div>
    </div>
  );
};
export default SubCategory;
