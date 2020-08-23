import React from "react";
import {
  Modal as MuiModal,
  Fade,
  Backdrop,
  makeStyles,
  Grid,
  Box,
  Fab,
  ClickAwayListener,
} from "@material-ui/core";

import Close from "../components/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    padding: "80px 0 40px 0",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "676px",
    height: "auto",
    minHeight: "100%",
  },
  content: {
    marginTop: "-48px",
    height: "100%",
  },
  overflow: {
    width: "100vw",
    height: "100%",
    overflow: "auto",
    "&:focus": {
      outline: "none !important",
    },
  },
}));

const Modal = ({ onCloseIconClick, children, open, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      className={classes.modal}
      onClose={onCloseIconClick}
      onBackdropClick={onCloseIconClick}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.overflow}>
          <ClickAwayListener onClickAway={onCloseIconClick}>
            <Box className={classes.paper}>
              <Close onClose={onCloseIconClick} />

              <Box className={classes.content}>{children}</Box>
            </Box>
          </ClickAwayListener>
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
