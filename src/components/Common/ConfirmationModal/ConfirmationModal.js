import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ConfirmationModal = ({ onConfirmation, toggleModal }) => {
  return (
    <Modal
      open
      onClose={toggleModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "White",
        }}
      >
        <Typography
          sx={{
            backgroundColor: "rgb(10,91,166)",
            color: "white",
            padding: "10px",
            fontWeight: "Bold",
          }}
        >
          CONFIRMATION
        </Typography>
        <Typography
          sx={{
            padding: "20px 10px",
            backgroundColor: "rgb(223,222,222)",
            color: "black",
          }}
        >
          You are about to change the status of this record ! Continue?
        </Typography>
        <Typography
          sx={{
            padding: "10px",
            backgroundColor: "rgb(223,222,222)",
          }}
        >
          <button
            onClick={onConfirmation}
            style={{
              backgroundColor: "rgb(10,91,166)",
              color: "white",
              padding: "5px 10px",
              marginLeft: "20px",
              borderRadius: "20%",
            }}
          >
            Yes
          </button>
          <button
            onClick={toggleModal}
            style={{
              backgroundColor: "rgb(10,91,166)",
              color: "white",
              padding: "5px 10px",
              marginLeft: "20px",
              borderRadius: "20%",
            }}
          >
            No
          </button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
