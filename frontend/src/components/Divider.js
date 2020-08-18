import React from "react";
import { Box, Divider as MuiDivider } from "@material-ui/core";

const Divider = ({ noPadding = false, width = "100%" }) => {
  return (
    <Box mt={noPadding ? 0 : 2} mb={noPadding ? 0 : 2} width={width}>
      <MuiDivider />
    </Box>
  );
};

export default Divider;
