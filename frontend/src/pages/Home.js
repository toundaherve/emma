import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  TextField,
  useTheme,
  makeStyles,
} from "@material-ui/core";

import Container from "../components/Container";
import Button from "../components/Button";
import Header from "../layouts/Header";
import { SimpleCard } from "../components/Card";
import Footer from "../layouts/Footer";
import useDeviceType from "../hooks/useDeviceType";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  about: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

const WelcomeToEmmas = () => {
  const classes = useStyles();
  const isTablet = useDeviceType("tablet");
  return (
    <Box className={classes.hero}>
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
          <div>
            <Box mb={3}>
              <Typography variant="h4" align="center">
                Fresh and Tasty Homemade Food
              </Typography>
            </Box>
            {/* <Box mb={2}>
              <TextField
                id="outlined-basic"
                label="Enter postcode"
                variant="outlined"
                fullWidth
              />
            </Box> */}
            <Link to="/menu">
              <Button variant="contained" fullWidth>
                Order now
              </Button>
            </Link>
          </div>
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
  const classes = useStyles();
  return (
    <Box className={classes.about}>
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
    </Box>
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
