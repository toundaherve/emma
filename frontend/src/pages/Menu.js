import React, { useState, useRef, useEffect } from "react";
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
import Popover from "../layouts/Popover";
import Drawer from "../layouts/Drawer";
import Food from "./Food";
import Cart from "./Cart";
import Skeleton from "../components/Skeleton";
import { mockMenu } from "../utils/mockData";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& .MuiTab-root": {
      fontSize: "16px !important",
      padding: "8px 12px !important",
    },
  },
}));

const status = {
  loading: "loading",
  error: "error",
  loaded: "loaded",
};

const categories = {
  mains: "mains",
  entrees: "entrees",
  wines: "wines",
};

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

const Navigation = ({ currentCategory, setCurrentCategory }) => {
  const theme = useTheme();
  const classes = useStyles();

  let activeTab = 0;
  if (currentCategory === categories.main) activeTab = 0;
  if (currentCategory === categories.entrees) activeTab = 1;
  if (currentCategory === categories.wines) activeTab = 2;

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        setCurrentCategory(categories.mains);
        break;
      case 1:
        setCurrentCategory(categories.entrees);
        break;
      case 2:
        setCurrentCategory(categories.wines);
        break;

      default:
        setCurrentCategory(categories.main);
        break;
    }
  };

  return (
    <Box border={`1px solid ${theme.palette.grey[300]}`}>
      <Container>
        <Tabs
          value={activeTab}
          onChange={handleChange}
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

const List = ({ onListItemClick, currentStatus, menu, currentCategory }) => {
  return (
    <Container>
      <Box pt={3} pb={3}>
        {currentStatus === status.error ? (
          <Typography variant="body1" align="center">
            Sorry, the menu is not yet available. <br />{" "}
            <strong>Please come back later !</strong>
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {menu[currentCategory].map((item, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                {currentStatus === status.loading && <Skeleton />}

                {currentStatus === status.loaded && (
                  <WithCTACard
                    data={item}
                    aspectRatio={315 / 240}
                    ctaText="Add to order"
                    onButtonClick={onListItemClick}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

function renderFood(isTablet, isOpenedPopover, closePopover, anchorEl) {
  return isTablet ? (
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
  );
}

function renderShoppingCart(
  isTablet,
  isShoppingCartOpened,
  closeShoppingCart,
  anchorEl
) {
  return isTablet ? (
    <Drawer open={isShoppingCartOpened} onClose={closeShoppingCart}>
      <Cart />
    </Drawer>
  ) : (
    <Popover
      open={isShoppingCartOpened}
      anchorEl={anchorEl}
      onCloseIconClick={closeShoppingCart}
      horizontalOrigin="right"
    >
      <Cart />
    </Popover>
  );
}

function getTheMenu(successHandler, errorHandler) {
  setTimeout(() => {
    successHandler(mockMenu);
  }, 5000);
  // errorHandler();
}

const Menu = () => {
  const anchorEl = useRef(null);
  const isTablet = useDeviceType("tablet");

  const [isOpenedPopover, setIsOpenedPopover] = useState(false);
  const [isShoppingCartOpened, setIsShoppingCartOpened] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status.loading);
  const [currentCategory, setCurrentCategory] = useState(categories.mains);
  const [menu, setMenu] = useState({
    mains: ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a"],
    entrees: ["n/a", "n/a", "n/a"],
    wines: ["n/a", "n/a", "n/a"],
  });

  function setLoadingStatus() {
    setCurrentStatus(status.loading);
  }

  function setErrorStatus() {
    setCurrentStatus(status.error);
  }

  function setLoadedStatus() {
    setCurrentStatus(status.loaded);
  }

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

  function handleSuccessGettingTheMenu(menuData) {
    setMenu(menuData);
    setCurrentStatus(status.loaded);
  }

  function handleErrorGettingTheMenu(menuData) {
    setCurrentStatus(status.error);
  }

  useEffect(() => {
    getTheMenu(handleSuccessGettingTheMenu, handleErrorGettingTheMenu);
  }, []);

  return (
    <div>
      <Header onShoppingCartIconClick={openShoppingCart} />
      <Banner />
      <Navigation
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <List
        onListItemClick={openPopover}
        currentStatus={currentStatus}
        menu={menu}
        currentCategory={currentCategory}
      />
      {renderFood(isTablet, isOpenedPopover, closePopover, anchorEl)}
      {renderShoppingCart(
        isTablet,
        isShoppingCartOpened,
        closeShoppingCart,
        anchorEl
      )}
      <Box mt={8}>
        <Footer />
      </Box>
    </div>
  );
};

export default Menu;
