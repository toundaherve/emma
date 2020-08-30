import React from "react";
import { Close as MuiClose } from "@material-ui/icons";
import { Box, Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "sticky",
    top: "8px",
    left: "8px",
    zIndex: 99,
  },
}));

const Close = ({ onClose }) => {
  const classes = useStyles();
  return (
    <Fab
      size="small"
      aria-label="close"
      className={classes.fab}
      onClick={onClose}
    >
      <MuiClose />
    </Fab>
  );
};

export default Close;
