import React, { useState, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  useTheme,
  Tabs,
  Tab,
  makeStyles,
} from "@material-ui/core";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Modal from "../layouts/Modal";
import Container from "../components/Container";
import { WithCTACard } from "../components/Card";
import useDeviceType from "../hooks/useDeviceType";
import groupArrayElements from "../utils/groupArrayItems";
import Popover from "../layouts/Popover";
import Food from "./Food";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& .MuiTab-root": {
      fontSize: "16px !important",
      padding: "8px 12px !important",
    },
  },
}));

const Banner = () => {
  const theme = useTheme();
  const isTablet = useDeviceType("tablet");
  return (
    <Box
      bgcolor={theme.palette.grey[900]}
      marginTop={`${isTablet ? "80px" : "72px"}`}
      height="208px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color={theme.palette.grey[50]}
    >
      <Typography variant={`${isTablet ? "h4" : "h6"}`}>The Menu</Typography>
    </Box>
  );
};

const Navigation = () => {
  const theme = useTheme();
  const isTablet = useDeviceType("tablet");
  const classes = useStyles();
  return (
    <Box border={`1px solid ${theme.palette.grey[300]}`}>
      <Container>
        <Tabs
          value={0}
          onChange={() => {}}
          aria-label="simple tabs example"
          className={classes.tabs}
        >
          <Tab label="Main" />
          <Tab label="Entrées" />
          <Tab label="Wines" />
        </Tabs>
      </Container>
    </Box>
  );
};

const mains = [
  {
    title: "Roasted chicken",
    description: "This is delicious chciken",
  },
  {
    title: "Roasted chicken",
    description: "This is delicious chciken",
  },
  {
    title: "Roasted chicken",
    description: "This is delicious chciken",
  },
  {
    title: "Roasted chicken",
    description: "This is delicious chciken",
  },
  {
    title: "Roasted chicken",
    description: "This is delicious chciken",
  },
  {
    title: "Roasted chicken",
    description: "This is delicious chciken",
  },
];

const List = ({ onListItemClick }) => {
  return (
    <Container>
      <Box pt={3} pb={3}>
        <Grid container spacing={3}>
          {mains.map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <WithCTACard
                data={item}
                aspectRatio={315 / 240}
                ctaText="Add to order"
                onButtonClick={onListItemClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

const Menu = () => {
  const anchorEl = useRef(null);
  const isTablet = useDeviceType("tablet");

  const [isOpenedPopover, setIsOpenedPopover] = useState(false);
  const [isShoppingCartOpened, setIsShoppingCartOpened] = useState(false);

  function openPopover() {
    setIsOpenedPopover(true);
  }

  function closePopover() {
    setIsOpenedPopover(false);
  }

  function openShoppingCart() {
    setIsShoppingCartOpened(true);
  }

  function closeShoppingCart() {
    setIsShoppingCartOpened(false);
  }

  return (
    <div>
      <Header onShoppingCartIconClick={openShoppingCart} />
      <Banner />
      <Navigation />
      <List onListItemClick={openPopover} />
      <Box mt={8}>
        <Footer />
      </Box>

      {isTablet ? (
        <Modal open={isOpenedPopover} onCloseIconClick={closePopover}>
          <Food />
        </Modal>
      ) : (
        <Popover
          open={isOpenedPopover}
          anchorEl={anchorEl}
          onCloseIconClick={closePopover}
          horizontalOrigin="center"
          verticalOrigin="bottom"
        >
          <Food />
        </Popover>
      )}

      <Popover
        open={isShoppingCartOpened}
        anchorEl={anchorEl}
        onCloseIconClick={closeShoppingCart}
        horizontalOrigin="right"
      >
        <Cart />
      </Popover>
    </div>
  );
};

export default Menu;
