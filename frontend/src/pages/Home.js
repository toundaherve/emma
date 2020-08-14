import React from "react";
import Image from "../components_old/Image";
import {
  AppBar,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  useTheme,
  Container,
  GridListTile,
  GridListTileBar,
  GridList,
  makeStyles,
} from "@material-ui/core";

import Logo from "../components/Logo";
import Footer from "../layouts/Footer";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    marginRight: "-16px !important",
  },
}));

const Home = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        {/* ------------------------ Header --------------------- */}
        <Grid item>
          <AppBar>
            <Container>
              <Box height="72px" display="flex" alignItems="stretch">
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <Logo />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </AppBar>
        </Grid>

        {/* ------------------------ Hero --------------------- */}
        <Grid item>
          <Box bgcolor={theme.palette.grey[300]}>
            <Container>
              <Box
                height="calc(100vh - 72px)"
                mt={9}
                display="flex"
                alignItems="stretch"
              >
                <Grid container alignItems="center" justify="center">
                  <Grid item container spacing={2}>
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
            <Grid container direction="column" spacing={3}>
              {/* ------------------------ Favorites --------------------- */}
              <Grid item>
                <Box pt={3} pb={3}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="h5">Emma's Favorite</Typography>
                    </Grid>
                    <Grid item>
                      <GridList
                        cols={2.8}
                        spacing={12}
                        className={classes.gridList}
                        cellHeight={124}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <GridListTile key={n}>
                            <Image />
                            <GridListTileBar title="Roasted Chicken" />
                          </GridListTile>
                        ))}
                      </GridList>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* ------------------------ Features --------------------- */}
              <Grid item container direction="column" spacing={4}>
                {/* ------------------------ Feature1 --------------------- */}
                <Grid item container direction="column" spacing={1}>
                  <Grid item>
                    <Image ratio={9 / 16} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">Homemade with care</Typography>
                    <Typography variant="body1">
                      With quality ingredients
                    </Typography>
                  </Grid>
                </Grid>

                {/* ------------------------ Feature2 --------------------- */}
                <Grid item container direction="column" spacing={1}>
                  <Grid item>
                    <Image ratio={9 / 16} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">Homemade with care</Typography>
                    <Typography variant="body1">
                      With quality ingredients
                    </Typography>
                  </Grid>
                </Grid>
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
