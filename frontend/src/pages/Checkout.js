import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  useTheme,
  Hidden,
} from "@material-ui/core";
import { Schedule, Room } from "@material-ui/icons";

import Header from "../layouts/Header";
import { Input } from "../components/Inputs";
import Button from "../components/Button";
import useDeviceType from "../hooks/useDeviceType";
import Divider from "../components/Divider";
import Container from "../components/Container";
import Footer from "../layouts/Footer";
import { Switch } from "react-router-dom";
import Popover from "../layouts/Popover";
import PaymentMethodSelection from "./Payment";
import Modal from "../layouts/Modal";

const useStyles = makeStyles((theme) => ({
  line: {
    flexWrap: "nowrap !important",
  },
}));

const Section = ({
  title,
  titleMargin = 3,
  info,
  children,
  ctaText = null,
  onCTAClick,
}) => {
  return (
    <Box pt={3} pb={3}>
      <Box mb={titleMargin}>
        <SectionTitle info={info}>{title}</SectionTitle>
      </Box>
      <div>{children}</div>
      {ctaText && <SectionCTA onClick={onCTAClick}>{ctaText}</SectionCTA>}
    </Box>
  );
};

const SectionTitle = ({ children, info = false }) => (
  <Grid item container justify="space-between" alignItems="center">
    <Grid item>
      <Typography variant="h6">{children}</Typography>
    </Grid>

    {info && (
      <Grid item>
        <Typography variant="h6">{info}</Typography>
      </Grid>
    )}
  </Grid>
);

const SectionCTA = ({ children, onClick }) => (
  <Button variant="contained" color="primary" fullWidth onClick={onClick}>
    {children}
  </Button>
);

const OrderSummaryLine = ({ left = () => null, right = () => null }) => {
  return (
    <Grid container>
      <Grid item xs={9}>
        {left()}
      </Grid>
      <Grid item xs={3}>
        {right()}
      </Grid>
    </Grid>
  );
};

const DeliveryDetails = () => {
  return (
    <Section title="Delivery Details" ctaText="Save & Continue">
      <Box mb={1}>
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
      </Box>
    </Section>
  );
};

const DeliveryTime = () => (
  <Section title="Delivery Time" titleMargin={0} info="20-30min"></Section>
);

const PaymentMethod = ({ onAddPaymentClick }) => (
  <Section
    title="Payment"
    ctaText="Add payment method"
    onCTAClick={onAddPaymentClick}
  ></Section>
);

const OrderDeliveryTime = () => (
  <OrderSummaryLine
    left={() => (
      <Grid container spacing={1}>
        <Grid item>
          <Schedule />
        </Grid>
        <Grid item>
          <Typography variant="body1">Arriving in 20-30 min</Typography>
        </Grid>
      </Grid>
    )}
  />
);

const OrderDeliveryAddress = () => (
  <OrderSummaryLine
    left={() => (
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
);

const SubTotal = () => (
  <OrderSummaryLine
    left={() => (
      <Typography variant="body1">
        Subtotal * <strong>2 items</strong>
      </Typography>
    )}
    right={() => (
      <Typography variant="body1" align="right">
        £ 9.65
      </Typography>
    )}
  />
);

const Fees = () => {
  return (
    <div>
      <Box mb={1.5}>
        <OrderSummaryLine
          left={() => <Typography variant="body1">Fees</Typography>}
        />
      </Box>
      <Box mb={1.5}>
        <OrderSummaryLine
          left={() => <Typography variant="body2">Delivery</Typography>}
          right={() => (
            <Typography variant="body2" align="right">
              £ 5.99
            </Typography>
          )}
        />
      </Box>
      <OrderSummaryLine
        left={() => <Typography variant="body2">Service</Typography>}
        right={() => (
          <Typography variant="body2" align="right">
            £ 5.99
          </Typography>
        )}
      />
    </div>
  );
};

const Total = () => {
  return (
    <OrderSummaryLine
      left={() => <Typography variant="h6">Total</Typography>}
      right={() => (
        <Typography variant="h6" align="right">
          £ 79.85
        </Typography>
      )}
    />
  );
};

function renderAddPaymentMethod({
  isTablet,
  isPaymentMethodsOpened,
  closePaymentMethods,
}) {
  return isTablet ? (
    <Modal open={isPaymentMethodsOpened} onCloseIconClick={closePaymentMethods}>
      <PaymentMethodSelection onFinish={closePaymentMethods} />
    </Modal>
  ) : (
    <Popover
      open={isPaymentMethodsOpened}
      verticalOrigin="center"
      horizontalOrigin="center"
      onCloseIconClick={closePaymentMethods}
    >
      <PaymentMethodSelection onFinish={closePaymentMethods} />
    </Popover>
  );
}

const OrderSummary = () => {
  const isTablet = useDeviceType("tablet");
  return (
    <Section title="Order summary" ctaText="Place Order">
      <Box mb={3}>
        <Box mb={1.5}>
          <OrderDeliveryTime />
        </Box>
        <OrderDeliveryAddress />
        <Divider />
        <Box mb={1.5}>
          <SubTotal />
        </Box>
        <Box mb={1.5}>
          <Fees />
        </Box>
        <Total />
      </Box>
    </Section>
  );
};

const Hr = () => {
  const theme = useTheme();
  return <Box height="8px" bgcolor={theme.palette.grey[200]} />;
};

const Checkout = () => {
  const isTablet = useDeviceType("tablet");
  const [isPaymentMethodsOpened, setIsPaymentMethodsOpened] = useState(false);

  function openPaymentMethods() {
    setIsPaymentMethodsOpened(true);
  }

  function closePaymentMethods() {
    setIsPaymentMethodsOpened(false);
  }
  return (
    <div>
      <Box pt={isTablet ? 10 : 9} pb={10}>
        <Header />
        <Container>
          <Grid container justify="space-around">
            <Grid item xs={12} sm={4}>
              <DeliveryDetails />
              <Hr />
              <DeliveryTime />
              <Hr />
              <PaymentMethod onAddPaymentClick={openPaymentMethods} />
              <Hidden smUp>
                <Hr />
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={4}>
              <OrderSummary />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {renderAddPaymentMethod({
        isTablet,
        isPaymentMethodsOpened,
        closePaymentMethods,
      })}
      <Footer />
    </div>
  );
};

export default Checkout;
