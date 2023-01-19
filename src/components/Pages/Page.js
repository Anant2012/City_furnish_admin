import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";

const Page = ({ item }) => {
  const [published, setPublished] = useState(item.status === "published");
  const [pos, setPos] = useState(item.position);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(item.hidden_page);
  const [modalOption, setModalOption] = useState();
  const handleClose = () => setIsOpen(false);
  const handleOpen = (val) => {
    setIsOpen(true);
    setModalOption(val);
  };
  const toggleHidden = () => {
    handleClose();
    setIsHidden(!isHidden);
  };
  const togglePublish = () => {
    setPublished(!published);
    handleClose();
  };
  const handleConfirmation = () => {
    modalOption === "hidden" ? toggleHidden() : togglePublish();
  };
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{item.page_name}</td>
        <td>{item.url}</td>
        <td>{item.category}</td>
        <td>
          <button onClick={() => handleOpen("hidden")}>
            {isHidden ? "Yes" : "No"}
          </button>
        </td>
        <td>
          <input
            type="number"
            value={pos}
            onChange={(e) => setPos(e.target.value)}
          />
          <button>Update</button>
        </td>
        <td>
          {published ? (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => handleOpen("publish")}
            >
              Unpublish
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => handleOpen("publish")}
            >
              Publish
            </button>
          )}
        </td>
        <td>
          <Link to="edit_banner">
            <BiEdit />
          </Link>
        </td>
      </tr>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "auto",
            position: "fixed",
            top: "40%",
            left: "37%",
            backgroundColor: "White",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            class="heading"
          >
            Confirmation
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, padding: "10px" }}
          >
            You are about to change the status of this record ! Continue?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 3 }}
            class="actions"
          >
            <button onClick={handleConfirmation}>Yes</button>
            <button onClick={handleClose}>No</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default Page;
