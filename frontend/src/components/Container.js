import React from "react";
import { Container as MuiContainer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "none !important",
  },
}));

const Container = ({ children }) => {
  const classes = useStyles();
  return <MuiContainer className={classes.container}>{children}</MuiContainer>;
};

export default Container;
