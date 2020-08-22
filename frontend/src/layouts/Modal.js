import React from "react";
import {
  Modal as MuiModal,
  Fade,
  Backdrop,
  makeStyles,
  Grid,
  Box,
  Fab,
} from "@material-ui/core";

import Close from "../components/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    // overflow: "auto",
    // maxHeight: "86vh",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
  overflow: {
    "&:focus": {
      outline: "none !important",
    },
  },
  content: {
    transform: "translateY(-48px)",
  },
}));

const Modal = ({ onClose: onCloseIconClick, children, open, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      className={classes.modal}
      onClose={onCloseIconClick}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          width="100vw"
          height="100vh"
          overflow="auto"
          className={classes.overflow}
        >
          <Box width="676px" mt={10} mb={10} className={classes.paper}>
            <Close onClose={onCloseIconClick} />

            <Box className={classes.content}>{children}</Box>
          </Box>
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
