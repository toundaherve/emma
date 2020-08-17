import React from "react";
import { Grid, Typography, Box, makeStyles, useTheme } from "@material-ui/core";
import { Schedule, Room } from "@material-ui/icons";

import Header from "../layouts/Header";
import { Input } from "../components/Inputs";
import Button from "../components/Button";
import useDeviceType from "../hooks/useDeviceType";
import Divider from "../components/Divider";

const useStyles = makeStyles((theme) => ({
  line: {
    flexWrap: "nowrap !important",
  },
}));

const Section = (props) => {
  const { title, children, info = null, cta = null } = props;
  console.log(title + "children \n");
  console.log(children);
  return (
    <Box pt={3} pb={3} pl={2} pr={2}>
      <Grid container direction="column" spacing={1}>
        {/* ------------------------ Details --------------------- */}
        <Grid item container direction="column" spacing={3}>
          {/* ------------------------ Title --------------------- */}
          <Grid item container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">{title}</Typography>
            </Grid>

            {info && (
              <Grid item>
                <Typography variant="h6">{info}</Typography>
              </Grid>
            )}
          </Grid>
          {/* ------------------------ Children--------------------- */}
          {children && (
            <Grid item container>
              {children}
            </Grid>
          )}
        </Grid>
        {/* ------------------------ CTA --------------------- */}
        <Grid item>
          {cta && (
            <Button variant="contained" color="primary" fullWidth>
              {cta}
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const SummaryLine = (props) => {
  const classes = useStyles();
  const {
    noPaddingTop = false,
    render = () => <></>,
    price = false,
    isFee = false,
    isTotal = false,
  } = props;
  return (
    <>
      {!noPaddingTop && (
        <Grid item xs={12}>
          <Box pt={1.5} />
        </Grid>
      )}

      <Grid item xs={9} container>
        <Grid item>{render()}</Grid>
      </Grid>

      {price && (
        <Grid item xs={3}>
          <Typography
            variant={`${isTotal ? "h6" : isFee ? "body2" : "body1"}`}
            align="right"
          >
            {price}
          </Typography>
        </Grid>
      )}
    </>
  );
};

const Hr = () => {
  const theme = useTheme();

  return <Box height="8px" bgcolor={theme.palette.grey[200]} />;
};

const Checkout = () => {
  const isTablet = useDeviceType("tablet");
  return (
    <Box pt={isTablet ? 10 : 9} pb={10}>
      <Grid container>
        <Grid item xs={12} container direction="column">
          {/* ------------------------ Header --------------------- */}
          <Grid item>
            <Header />
          </Grid>

          {/* ------------------------ Content --------------------- */}
          <Grid item container direction="column">
            {/* ------------------------ Delivery Details --------------------- */}
            <Grid item>
              <Section title="Delivery Details" cta="Save & Continue">
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Input placeholder="Post code" fullWidth />
                  </Grid>
                  <Grid item>
                    <Input placeholder="Door or Flat" fullWidth />
                  </Grid>
                  <Grid item>
                    <Input placeholder="Name" fullWidth />
                  </Grid>
                </Grid>
              </Section>
            </Grid>

            {/* ------------------------ HR --------------------- */}
            <Grid item>
              <Hr />
            </Grid>

            {/* ------------------------ Delivery Time --------------------- */}
            <Grid item>
              <Section title="Delivery Time" info="20-30min"></Section>
            </Grid>

            {/* ------------------------ HR --------------------- */}
            <Grid item>
              <Hr />
            </Grid>

            {/* ------------------------ Payment --------------------- */}
            <Grid item>
              <Section title="Payment" cta="Add payment method"></Section>
            </Grid>
          </Grid>
        </Grid>

        {/* ------------------------ HR --------------------- */}
        <Grid item xs={12}>
          <Hr />
        </Grid>

        {/* ------------------------ Summary --------------------- */}
        <Grid xs={12} item>
          <Section title="Order summary">
            <Grid item container direction="column">
              {/* ------------------------ Location and Time --------------------- */}
              <Grid item container direction="column">
                {/* ------------------------ Time --------------------- */}
                <Grid item container>
                  <SummaryLine
                    noPaddingTop
                    render={() => (
                      <Grid container spacing={1}>
                        <Grid item>
                          <Schedule />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">
                            Arriving in 20-30 min
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  />
                </Grid>
                {/* ------------------------ Location --------------------- */}
                <Grid item container>
                  <SummaryLine
                    render={() => (
                      <Grid container spacing={1}>
                        <Grid item>
                          <Room />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">
                            LS16 5RQ <br /> 27 Montgomery Avenue
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  />
                </Grid>
              </Grid>

              {/* ------------------------ Divider --------------------- */}
              <Grid item>
                <Divider />
              </Grid>

              {/* ------------------------ Bill --------------------- */}
              <Grid item container direction="column">
                {/* ------------------------ Subtotal --------------------- */}
                <Grid item container>
                  <SummaryLine
                    price="£ 15.99"
                    render={() => (
                      <Typography variant="body1">
                        Subtotal * <strong>2 items</strong>
                      </Typography>
                    )}
                  />
                </Grid>

                {/* ------------------------ Fees --------------------- */}
                <Grid item container direction="column">
                  <Grid item container>
                    <SummaryLine
                      render={() => (
                        <Typography variant="body1">Fees</Typography>
                      )}
                    />
                  </Grid>
                  {/* ------------------------ Service --------------------- */}
                  <Grid item container>
                    <SummaryLine
                      isFee
                      price="£ 15.99"
                      render={() => (
                        <Typography variant="body2">Service</Typography>
                      )}
                    />
                  </Grid>
                  {/* ------------------------ Delivery --------------------- */}
                  <Grid item container>
                    <SummaryLine
                      isFee
                      price="£ 15.99"
                      render={() => (
                        <Typography variant="body2">Delivery</Typography>
                      )}
                    />
                  </Grid>
                </Grid>

                {/* ------------------------ Total --------------------- */}
                <Grid item container direction="column">
                  <Grid item container>
                    <SummaryLine
                      isTotal
                      price="£ 75.99"
                      total
                      render={() => <Typography variant="h6">Total</Typography>}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Section>
        </Grid>

        {/* ------------------------ Summary --------------------- */}
        <Grid xs={12} item>
          <Box pr={2} pl={2}>
            <Button variant="contained" color="primary" fullWidth>
              Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
