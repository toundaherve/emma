import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  GridList,
  GridListTile,
  makeStyles,
  GridListTileBar,
} from "@material-ui/core";
import Image from "material-ui-image";

import useDeviceType from "../hooks/useDeviceType";

const EmmasFavorites = () => {
  const isTablet = useDeviceType("tablet");

  const useStyles = makeStyles((theme) => ({
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      marginRight: "-16px !important",
    },
    img: {
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  }));

  const classes = useStyles();

  return (
    <Box pt={isTablet ? 10 : 3} pb={isTablet ? 6 : 4}>
      <Grid container direction="column" spacing={isTablet ? 3 : 1}>
        {/* ------------------------ Title --------------------- */}
        <Grid item>
          <Typography variant={isTablet ? "h4" : "h5"}>
            Emma's Favorite
          </Typography>
        </Grid>
        {/* ------------------------ List --------------------- */}
        <Grid item>
          <GridList
            cols={isTablet ? 5 : 2.5}
            spacing={isTablet ? 56 : 32}
            className={classes.gridList}
            cellHeight="auto"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <GridListTile key={n} className={classes.gridList}>
                <Box width="100%" paddingTop="100%" mb={1} position="relative">
                  <img
                    className={classes.img}
                    src="https://images.unsplash.com/photo-1543340904-0b1d843bccda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  />
                </Box>
                {/* <GridListTileBar title="Rosted Chicken" /> */}
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmmasFavorites;
