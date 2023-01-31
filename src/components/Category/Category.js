import CheckButton from "../Common/ActionsButtons/CheckButton";
import DeleteButton from "../Common/ActionsButtons/DeleteButton";
import EditButton from "../Common/ActionsButtons/EditButton";
import ViewButton from "../Common/ActionsButtons/ViewButton";
import SubCategory from "./SubCategory";

const Category = ({ category }) => {
  return (
    <>
      <div className="main-category">
        <div className="category-name">
          <span className="main-category-checkbox">
            <input type="checkbox" />
          </span>
          &nbsp;&nbsp;
          {category.cat_name}&nbsp;&nbsp;&nbsp;{`(${category.cat_position})`}
        </div>
        <div className="category-options">
          <div className="category-pos">
            <input type="number" />
            Update
          </div>
          <div className="d-flex">
            <CheckButton />
            <EditButton />
            <ViewButton />
            <DeleteButton />
          </div>
        </div>
      </div>
      {!!category.subcategory.length && (
        <div
          style={{
            padding: "0px 0px 0 20px",
            backgroundColor: "white",
          }}
          className="subCategory-container"
        >
          {category.subcategory.map((sub) => (
            <SubCategory subCategory={sub} />
          ))}
        </div>
      )}
    </>
  );
};
export default Category;
