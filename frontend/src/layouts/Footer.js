import React from "react";
import { Grid, Typography, useTheme, Box, makeStyles } from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

import Container from "../components/Container";
import Logo from "../components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.text.primary,
  },
}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Box pt={8} pb={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Logo />
              </Grid>

              <Grid item xs={12} sm={6} container spacing={3}>
                <Grid item>
                  <Facebook />
                </Grid>
                <Grid item>
                  <Instagram />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} container spacing={2}>
              <Grid
                item
                container
                xs={12}
                sm={6}
                direction="column"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body2">About Emma's Kitchen</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">Privacy Policy</Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                sm={6}
                direction="column"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body2">Terms & Conditions</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    © 2020 Emma’s Kitchen <br />
                    All Rights Reserved
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
