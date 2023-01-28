import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Modal, Box, Typography } from "@mui/material";
import "./price.css"

const PriceRange = ({ item }) => {
  const [published, setPublished] = useState(item.status === "active");
  const [isOpen, setIsOpen] = useState(false);
  const hanldeOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <tr>
        <td className="w-1/5">
          <input type="checkbox" />
        </td>
        <td>{item.range}</td>
        <td>
          {published ? (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setPublished(!published)}
            >
              Inactive
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => setPublished(!published)}
            >
              Active
            </button>
          )}
        </td>

        <td style={{display:"flex" , padding:"12px" , height:"62"}}>
            <Link to="editViewPricing">
              <BiEdit />
            </Link>
            <RiDeleteBin6Fill onClick={hanldeOpen} style={{marginLeft:"2px"}}/>
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
            className="actions "
          >
            <button onClick={handleClose}>Yes</button>
            <button onClick={handleClose}>No</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default PriceRange;
