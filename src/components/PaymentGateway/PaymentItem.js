import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Modal, Box, Typography } from "@mui/material";
import "./Payment.css";

const PaymentItem = ({ item }) => {
  const [published, setPublished] = useState(item.status === "enabled");
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const togglePublish = () => {
    setPublished(!published);
    handleClose();
  };
  return (
    <>
      <tr>
        <td>
          <input type="checkbox"></input>
        </td>
        <td>{item.name}</td>
        <td>
          {published ? (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={handleOpen}
            >
              Disable
            </button>
          ) : (
            <button type="button" class="btn btn-success" onClick={handleOpen}>
              Enable
            </button>
          )}
        </td>
        <td>
          <Link to="edit_gateway">
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
            <button onClick={togglePublish}>Yes</button>
            <button onClick={handleClose}>No</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentItem;
