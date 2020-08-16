import React from "react";
import Image from "material-ui-image";
import {
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  useTheme,
} from "@material-ui/core";

import Container from "../components/Container";
import Header from "../layouts/Header";
import EmmasFavorites from "../layouts/EmmasFavorites";
import Features from "../layouts/Features";
import Footer from "../layouts/Footer";
import useDeviceType from "../hooks/useDeviceType";

const Home = () => {
  const theme = useTheme();
  const isTablet = useDeviceType("tablet");
  return (
    <div>
      <Grid container direction="column">
        {/* ------------------------ Header --------------------- */}
        <Grid item>
          <Header />
        </Grid>

        {/* ------------------------ Hero --------------------- */}
        <Grid item>
          <Box bgcolor={theme.palette.grey[300]}>
            <Container>
              <Box
                height={`calc(100vh - ${isTablet ? "80px" : "72px"})`}
                mt={9}
                maxWidth="672px"
                margin="0 auto"
                display="flex"
                alignItems="stretch"
              >
                <Grid container alignItems="center" justify="center">
                  <Grid item container spacing={3} justify="center">
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
                        <Button variant="contained" color="primary" fullWidth>
                          Order now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Grid>

        {/* ------------------------ Content --------------------- */}
        <Grid item>
          <Container>
            <Grid container direction="column">
              {/* ------------------------ Favorites --------------------- */}
              {/* <Grid item>
                <EmmasFavorites />
              </Grid> */}

              {/* ------------------------ Features --------------------- */}
              <Grid item>
                <Features />
              </Grid>
            </Grid>
          </Container>
        </Grid>

        {/* ------------------------ Footer --------------------- */}
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
