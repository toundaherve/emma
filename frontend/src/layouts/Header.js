import React from "react";
import { AppBar, Box, Grid } from "@material-ui/core";
import Logo from "../components/Logo";
import useDeviceType from "../hooks/useDeviceType";

import Container from "../components/Container";
import { Link } from "react-router-dom";

const Header = () => {
  const isTablet = useDeviceType("tablet");
  return (
    <AppBar>
      <Container>
        <Box
          height={`${isTablet ? "80px" : "72px"}`}
          display="flex"
          alignItems="center"
        >
          <Link to="/">
            <Logo />
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
