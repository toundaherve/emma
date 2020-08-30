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

    "& label.Mui-focused": {
      color: theme.palette.action.active,
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2x solid yellow",
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
      {Object.keys(source).map((key, idx) => (
        <option key={idx} value={source[key]}>
          {key}
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
