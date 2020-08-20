import React from "react";
import Image from "material-ui-image";
import { Typography, Grid, Box, TextField, useTheme } from "@material-ui/core";

import Container from "../components/Container";
import Button from "../components/Button";
import Header from "../layouts/Header";
import EmmasFavorites from "../layouts/EmmasFavorites";
import { SimpleCard } from "../layouts/Cards";
import Footer from "../layouts/Footer";
import useDeviceType from "../hooks/useDeviceType";
import { Link } from "react-router-dom";

const WelcomeToEmmas = () => {
  const theme = useTheme();
  const isTablet = useDeviceType("tablet");
  return (
    <Box bgcolor={theme.palette.grey[300]}>
      <Container>
        <Box
          height={`calc(100vh - ${isTablet ? "80px" : "72px"})`}
          mt={9}
          maxWidth="672px"
          margin="0 auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h4" align="center">
                Fresh and Tasty Homemade Food
              </Typography>
            </Grid>
            <Grid item container spacing={2} direction="column">
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Enter postcode"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Link to="/menu">
                  <Button variant="contained" color="primary" fullWidth>
                    Order now
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const dataAboutEmmas = [
  {
    title: "Homemade with care",
    description: "With quality ingredients",
  },
  {
    title: "Homemade with care",
    description: "With quality ingredients",
  },
  {
    title: "Homemade with care",
    description: "With quality ingredients",
  },
];

const AboutEmmas = () => {
  return (
    <Container>
      <Box pt={3} pb={3}>
        <Grid container spacing={4}>
          {dataAboutEmmas.map((item, n) => (
            <Grid item xs={12} sm={4} key={n}>
              <SimpleCard data={item} aspectRatio={16 / 9} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeToEmmas />
      <AboutEmmas />
      <Box mt={8}>
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
