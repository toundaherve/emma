import React from "react";
import { Close } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const CloseBtn = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="48px"
      height="48px"
      position="absolute"
      top="8px"
      left="8px"
      {...props}
    >
      <Close />
    </Box>
  );
};

export default CloseBtn;
