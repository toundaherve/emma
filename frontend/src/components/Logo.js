import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const Logo = () => {
  return (
    <Link to="/">
      <Box display="inline-block">
        <Typography variant="h5">Emma's Kitchen</Typography>
      </Box>
    </Link>
  );
};

export default Logo;
