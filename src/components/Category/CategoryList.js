import { AxiosInstance } from "../../AxiosInstance";
import { useState, useEffect } from "react";
import "./categoryList.css";
import Category from "./Category";

const CategoryList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    AxiosInstance.get("/api/category")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full mt-3">
      <div className="w-[90%] flex flex-col  mx-auto">
        <div className="p-3 font-lora font-semibold tracking-wider text-2xl bg-baby_blue text-white ">
          <span style={{ marginLeft: "10px" }}>Category List</span>
        </div>
        <div className="actions_bar">
          <div className="actions_bar_left">
            <span className="left_action_label">Add New Category</span>
            <span className="left_action_button">
              <button>Add New</button>
            </span>
          </div>
          <div className="actions_bar_right">
            <button className="left_action_button">Active</button>
            <button className="left_action_button">InActive</button>
            <button className="left_action_button">Delete</button>
          </div>
        </div>
        <div className="category-table">
          {data?.map((cat) => (
            <Category category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
