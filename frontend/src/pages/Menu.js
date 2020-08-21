import React, { useState } from "react";
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

const List = () => {
  const isTablet = useDeviceType("tablet");
  const groupedItems = groupsOf3(mains, (data) => (
    <Grid item xs={12} sm={4}>
      <WithCTACard data={data} aspectRatio={315 / 240} ctaText="Add to order" />
    </Grid>
  ));
  return (
    <Container>
      <Box pt={4} pb={4}>
        <Grid container spacing={isTablet ? 6 : 3}>
          {groupedItems.map((group, idx) => (
            <Grid item xs={12} container spacing={3} key={idx}>
              {group}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

function groupsOf3(list, component) {
  const bigArray = [];
  const numberOfGroups = Math.ceil(list.length / 3);
  let quantityPushed = 0;
  let currentGroup = 0;

  // create Groups
  for (let i = 0; i < numberOfGroups; i++) {
    bigArray.push([]);
  }

  list.forEach((item) => {
    if (quantityPushed >= 3) {
      currentGroup++;
      quantityPushed = 0;
    }
    bigArray[currentGroup].push(component(item));
    quantityPushed++;
  });

  return bigArray;
}

const Menu = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Navigation />
      <List />
      <Box mt={8}>
        <Footer />
      </Box>
    </div>
  );
};

export default Menu;
