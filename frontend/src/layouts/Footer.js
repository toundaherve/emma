import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  Box,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

import Logo from "../components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.grey[50],
  },
}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box mt={10}>
      <Box bgcolor={theme.palette.grey[900]}>
        <Container>
          <Box pt={8} pb={16}>
            <Grid
              container
              direction="column"
              spacing={6}
              className={classes.root}
            >
              <Grid item container direction="column" spacing={3}>
                <Grid item>
                  <Logo />
                </Grid>

                <Grid item container spacing={2}>
                  <Grid item>
                    <Facebook />
                  </Grid>
                  <Grid item>
                    <Instagram />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="body2">About Emma's Kitchen</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">Privacy Policy</Typography>
                </Grid>
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
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
