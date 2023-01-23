import { Link, useNavigate } from "react-router-dom";

const SubList = ({ items, ToggleSidebar }) => {
  const navigate = useNavigate();
  return (
    
    <div className="py-4 pl-9 flex flex-col space-y-2 w-full bg-blue-200/10 rounded-2xl mt-3 transition-transform border-2 border-b-blue-900">
      {items.map((item) => (
        <span
          onClick={() => {
            ToggleSidebar();
            navigate(`${item?.route}`);
          }}
          className="hover:scale-110 duration-300 cursor-pointer hover:translate-x-5 hover:text-indigo-900 "
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default SubList;
