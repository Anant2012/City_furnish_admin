import { Link } from "react-router-dom";
const SubList = ({ items, ToggleSidebar }) => {
  return (
    <div className="sub-link">
      {items.map((item) => (
        <div className="sub-item">
          <Link to={item?.route} onClick={ToggleSidebar}>
            {item.name}
          </Link>{" "}
        </div>
      ))}
    </div>
  );
};

export default SubList;
