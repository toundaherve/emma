import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  Box,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import { Select } from "../components/Inputs";
import Divider from "../components/Divider";
import {
  WithCTAActionAndNoteTemplate,
  SimpleActionTemplate,
} from "../layouts/ActionTemplate";
import isLastItem from "../utils/isLastItem";

const quantityNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ItemQuantity = ({ number }) => {
  return <Select source={quantityNumbers} value={number} />;
};

const ItemName = ({ children }) => {
  return <Typography variant="body1">{children}</Typography>;
};

const ItemPrice = ({ children }) => {
  return (
    <Typography variant="body1" align="right">
      {children}
    </Typography>
  );
};

const Extras = ({ extras }) => {
  return (
    <Box pt={1} pb={0.5}>
      <Typography variant="body2">Add Extra</Typography>
      {extras.map((extra, idx) => (
        <Typography variant="body2" key={idx}>
          {extra}
        </Typography>
      ))}
    </Box>
  );
};

const OrderLine = ({ line }) => {
  const { item, quantity, chosenExtras } = line;
  return (
    <Grid item container justify="space-between">
      <Grid item>
        <Box mr={2} display="inline">
          <ItemQuantity number={quantity} />
        </Box>

        <Box display="inline-block">
          <ItemName>{item.title}</ItemName>
          {chosenExtras && <Extras extras={chosenExtras} />}
        </Box>
      </Grid>

      <Grid item>
        <ItemPrice>£ {item.price * quantity}</ItemPrice>
      </Grid>
    </Grid>
  );
};

const OrderItems = ({ cart }) => {
  return (
    <div>
      {cart.map((line, idx) => (
        <div key={idx}>
          <OrderLine line={line} />
          {!isLastItem(quantityNumbers, idx) && <Divider />}
        </div>
      ))}
    </div>
  );
};

const Cart = ({ cart }) => {
  const theme = useTheme();
  let history = useHistory();

  function checkout() {
    history.push("/checkout");
  }

  function calculateTotal() {
    return cart.reduce((total, line) => {
      total += line.item.price * line.quantity;
      return total;
    }, 0);
  }

  return cart.length ? (
    <WithCTAActionAndNoteTemplate
      title="Your Order"
      ctaText={`Next: Checkout (£ ${calculateTotal()})`}
      onButtonClick={checkout}
      fullHeight
    >
      <OrderItems cart={cart} />
    </WithCTAActionAndNoteTemplate>
  ) : (
    <SimpleActionTemplate title="Your order" fullHeight>
      <Typography variant="body1" align="center">
        No order yet
      </Typography>
    </SimpleActionTemplate>
  );
};

function mapStateToProps(state) {
  const { cart } = state;
  return { cart };
}

export default connect(mapStateToProps)(Cart);
