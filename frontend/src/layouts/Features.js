import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import useDeviceType from "../hooks/useDeviceType";

const Features = () => {
  const isTablet = useDeviceType("tablet");

  const useStyles = makeStyles((theme) => ({
    img: {
      width: "100%",
    },

    gridItem: {
      height: `${
        isTablet
          ? "calc((100vw - 48px - (32px * 2)) / 3 * 9 /16)"
          : "calc((100vw - 32px) * 9 /16)"
      }`,
    },
  }));

  const classes = useStyles();

  return (
    <Box pt={3} pb={3}>
      <Grid container spacing={4}>
        {[1, 2, 3].map((n) => (
          <Grid item xs={12} sm={4} container direction="column" key={n}>
            <Grid item className={classes.gridItem}>
              <img
                className={classes.img}
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg"
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">Homemade with care</Typography>
              <Typography variant="body1">With quality ingredients</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
