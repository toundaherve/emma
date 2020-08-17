import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiFilledInput-input": {
      padding: "15px 32px 14px 14px !important",
    },

    "& .MuiInputLabel-filled.MuiInputLabel-shrink": {
      display: "none",
    },
  },
}));

export const Select = (props) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      id="filled-select-quantity-native"
      select
      value={2}
      onChange={() => {}}
      SelectProps={{
        native: true,
      }}
      variant="filled"
      {...props}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </TextField>
  );
};

export const Input = (props) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.textField}
      id="filled-basic"
      label={props.placeholder}
      variant="filled"
      {...props}
    />
  );
};
