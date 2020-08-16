import React from "react";
import { Grid, Box, Typography, useTheme } from "@material-ui/core";

import Header from "../layouts/Header";
import Cards from "../layouts/Cards";
import useDeviceType from "../hooks/useDeviceType";
import Container from "../components/Container";
import Footer from "../layouts/Footer";

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

const Menu = () => {
  const theme = useTheme();
  const isTablet = useDeviceType("tablet");
  return (
    <Grid container direction="column">
      {/* ------------------------ Header --------------------- */}
      <Grid item>
        <Header />
      </Grid>

      {/* ------------------------ Hero --------------------- */}
      <Grid item>
        <Box
          bgcolor={theme.palette.grey[900]}
          marginTop={`${isTablet ? "80px" : "72px"}`}
          height="208px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color={theme.palette.grey[50]}
        >
          <Typography variant={`${isTablet ? "h4" : "h6"}`}>
            The Menu
          </Typography>
        </Box>
      </Grid>

      {/* ------------------------ Menu --------------------- */}
      <Grid item>
        <Box
          border={`1px solid ${theme.palette.grey[300]}`}
          pt={isTablet ? 4 : 3}
          pb={isTablet ? 4 : 3}
        >
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Typography variant={`${isTablet ? "h4" : "h5"}`}>
                Main
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant={`${isTablet ? "h4" : "h5"}`}>
                Entrées
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant={`${isTablet ? "h4" : "h5"}`}>
                Wines
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* ------------------------ List --------------------- */}
      <Grid item>
        <Container>
          <Cards data={mains} aspectRatio={240 / 315} />
        </Container>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Menu;
