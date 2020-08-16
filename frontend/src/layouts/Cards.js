import React from "react";
import { Grid, Typography, Box, makeStyles, Button } from "@material-ui/core";
import useDeviceType from "../hooks/useDeviceType";

export const Image = ({
  src = "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc039.svg",
  aspectRatio,
}) => {
  const isTablet = useDeviceType("tablet");

  const useStyles = makeStyles((theme) => ({
    img: {
      width: "100%",
    },

    imgContainer: {
      backgroundColor: theme.palette.grey[900],
      height: `${
        isTablet
          ? "calc((100vw - 48px - (32px * 2)) / 3 *" + aspectRatio + ")"
          : "calc((100vw - 32px) *" + aspectRatio + ")"
      }`,
    },
  }));

  const classes = useStyles();
  return (
    <Grid item className={classes.imgContainer}>
      <img className={classes.img} src={src} />
    </Grid>
  );
};

export const Card = ({ item, aspectRatio }) => {
  return (
    <Grid container direction="column">
      <Image aspectRatio={aspectRatio} />
      <Grid item container alignItems="flex-end">
        <Grid item xs={9}>
          <Box pt={1.5}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" color="primary">
            Add To Order
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Cards = ({ data, aspectRatio = 9 / 16 }) => {
  return (
    <Box pt={3} pb={3}>
      <Grid container spacing={4}>
        {data.map((item, n) => (
          <Grid item xs={12} sm={4} key={n}>
            <Card item={item} aspectRatio={aspectRatio} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
