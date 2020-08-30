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
import { updateQuantity } from "../store/cartSlice";

const useStyles = makeStyles((theme) => ({
  extraHeading: {
    color: theme.palette.text.primary,
  },
  extraName: {
    color: theme.palette.text.secondary,
  },
}));

const quantityNumbers = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const ItemQuantity = ({ number, handleUpdateQuantity }) => {
  const handleChange = (event) => {
    handleUpdateQuantity(parseInt(event.target.value));
  };

  return (
    <Select source={quantityNumbers} value={number} onChange={handleChange} />
  );
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
  const classes = useStyles();
  return (
    <Box pt={1} pb={0.5}>
      <Typography variant="body2" className={classes.extraHeading}>
        Add Extra
      </Typography>
      {extras.map((extra, idx) => (
        <Typography variant="body2" key={idx} className={classes.extraName}>
          {extra}
        </Typography>
      ))}
    </Box>
  );
};

const OrderLine = ({ line, handleUpdateQuantity }) => {
  const { item, quantity, chosenExtras } = line;
  return (
    <Grid item container justify="space-between">
      <Grid item>
        <Box mr={2} display="inline">
          <ItemQuantity
            number={quantity}
            handleUpdateQuantity={handleUpdateQuantity(item.id)}
          />
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

const OrderItems = ({ cart, handleUpdateQuantity }) => {
  return (
    <div>
      {cart.map((line, idx) => (
        <div key={idx}>
          <OrderLine line={line} handleUpdateQuantity={handleUpdateQuantity} />
          {!isLastItem(quantityNumbers, idx) && <Divider />}
        </div>
      ))}
    </div>
  );
};

const Cart = ({ cart, updateQuantity }) => {
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

  function handleUpdateQuantity(id) {
    return function (newQuantity) {
      updateQuantity({ id, newQuantity });
    };
  }

  return cart.length ? (
    <WithCTAActionAndNoteTemplate
      title="Your Order"
      ctaText={`Next: Checkout (£ ${calculateTotal()})`}
      onButtonClick={checkout}
      fullHeight
    >
      <OrderItems cart={cart} handleUpdateQuantity={handleUpdateQuantity} />
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

function mapDispatchToProps(dispatch) {
  return { updateQuantity: (update) => dispatch(updateQuantity(update)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
