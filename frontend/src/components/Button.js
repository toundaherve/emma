import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: "12px 16px !important",

    "& > span": {
      textTransform: "capitalize !important",
      fontSize: "18px !important",
    },
  },
}));

const Button = (props) => {
  const { children } = props;

  const classes = useStyles();
  return (
    <MuiButton {...props} className={classes.button}>
      {children}
    </MuiButton>
  );
};

export default Button;
