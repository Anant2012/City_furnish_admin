import { GrUpdate } from "react-icons/gr";
const UpdateButton = ({ clickHandler }) => {
  return (
    <GrUpdate
      style={{
        width: "16px",
        height: "24px",
        marginRight: "7px",
      }}
      onClick={clickHandler}
      data-toggle="tooltip"
      data-placement="top"
      title="Update"
    />
  );
};

export default UpdateButton;
