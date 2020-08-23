import React from "react";
import { Popover as MuiPopover, makeStyles, Fab, Box } from "@material-ui/core";

import Close from "../components/Close";

const useStyles = makeStyles((theme) => ({
  popover: {
    "& .MuiPopover-paper": {
      top: "0 !important",
      left: "0 !important",
      width: "100%",
      maxWidth: "none",
      height: "100%",
      maxHeight: "calc(100% - 0px)",
      position: "relative",
    },
  },

  content: {},
}));

const Popover = ({
  onCloseIconClick,
  children,
  verticalOrigin = "top",
  horizontalOrigin = "left",
  ...rest
}) => {
  const classes = useStyles();
  return (
    <MuiPopover
      anchorOrigin={{ vertical: verticalOrigin, horizontal: horizontalOrigin }}
      className={classes.popover}
      onClose={onCloseIconClick}
      {...rest}
    >
      <Close onClose={onCloseIconClick} />

      <Box height="100%" marginTop="-48px">
        {children}
      </Box>
    </MuiPopover>
  );
};

export default Popover;
