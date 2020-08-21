import React from "react";
import { Popover as MuiPopover, makeStyles, Fab, Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  popover: {
    "& .MuiPopover-paper": {
      top: "0 !important",
      left: "0 !important",
      width: "100%",
      maxWidth: "none",
      maxHeight: "calc(100% - 0px)",
      position: "relative",
    },
  },

  fab: {
    position: "sticky",
    top: "8px",
    left: "8px",
    zIndex: 99,
  },

  content: {
    transform: "translateY(-48px)",
  },
}));

const Popover = ({ handleClose, children, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiPopover
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      className={classes.popover}
      onClose={handleClose}
      {...rest}
    >
      <Fab
        size="medium"
        color="secondary"
        aria-label="close"
        className={classes.fab}
        onClick={handleClose}
      >
        <Close />
      </Fab>

      <Box className={classes.content}>{children}</Box>
    </MuiPopover>
  );
};

export default Popover;
