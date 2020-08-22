import React from "react";
import { Drawer as MuiDrawer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > .MuiDrawer-paper": {
      width: "414px",
    },
  },
}));

const Drawer = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <MuiDrawer anchor="right" className={classes.root} {...rest}>
      {children}
    </MuiDrawer>
  );
};

export default Drawer;
