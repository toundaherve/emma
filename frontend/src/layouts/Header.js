import React from "react";
import { AppBar, Box, Grid, Typography } from "@material-ui/core";
import { LocalMall } from "@material-ui/icons";

import Container from "../components/Container";
import Logo from "../components/Logo";
import useDeviceType from "../hooks/useDeviceType";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ onShoppingCartIconClick, cart }) => {
  const isTablet = useDeviceType("tablet");
  const isMenuPage = useLocation().pathname === "/menu";
  return (
    <AppBar>
      <Container>
        <Box
          height={`${isTablet ? "80px" : "72px"}`}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          {isMenuPage && (
            <ShoppingCartIcon onClick={onShoppingCartIconClick} cart={cart} />
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

const ShoppingCartIcon = ({ onClick, cart }) => {
  function totalItemsInCart() {
    return cart.reduce((total, line) => {
      return total + line.quantity;
    }, 0);
  }
  return (
    <Box
      pt={1.5}
      pb={1.5}
      pl={2}
      pr={2}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <LocalMall size="medium" />
        </Grid>

        <Grid item>
          <Typography variant="body1">{totalItemsInCart()}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

function mapStateToProps(state) {
  const { cart } = state;
  return { cart };
}

export default connect(mapStateToProps)(Header);
