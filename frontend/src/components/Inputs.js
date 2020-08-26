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

export const Select = ({ source, value, ...rest }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      id="filled-select-quantity-native"
      select
      value={value}
      onChange={() => {}}
      SelectProps={{
        native: true,
      }}
      variant="filled"
      {...rest}
    >
      {source.map((val, idx) => (
        <option key={idx} value={val}>
          {val}
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
