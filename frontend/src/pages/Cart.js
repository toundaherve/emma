import React from "react";
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
import { WithCTAActionTemplate } from "../layouts/ActionTemplate";
import isLastItem from "../utils/isLastItem";
import { useHistory } from "react-router-dom";

const itemsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ItemQuantity = ({ children }) => {
  return <Select />;
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

const Extras = () => {
  return (
    <Box pt={1} pb={0.5}>
      <Typography variant="body2">Add Extra</Typography>
      <Typography variant="body2">Fries</Typography>
    </Box>
  );
};

const OrderLine = () => {
  return (
    <Grid item container justify="space-between">
      <Grid item>
        <Box mr={2} display="inline">
          <ItemQuantity></ItemQuantity>
        </Box>

        <Box display="inline-block">
          <ItemName>Roasted Chicken</ItemName>
          <Extras />
        </Box>
      </Grid>

      <Grid item>
        <ItemPrice>£ 5.99</ItemPrice>
      </Grid>
    </Grid>
  );
};

const OrderItems = () => {
  return (
    <div>
      {itemsData.map((item, idx) => (
        <>
          <OrderLine></OrderLine>
          {!isLastItem(itemsData, idx) && <Divider />}
        </>
      ))}
    </div>
  );
};

const AddNote = () => {
  return (
    <TextField
      id="note-textarea"
      label="Add a note for Emma"
      multiline
      fullWidth
      variant="filled"
    />
  );
};

const Cart = () => {
  const theme = useTheme();
  let history = useHistory();

  function checkout() {
    history.push("/checkout");
  }
  return (
    <WithCTAActionTemplate
      title="Your Order"
      ctaText="Next: Checkout (£ 15.75)"
      onButtonClick={checkout}
    >
      <OrderItems />
      <Box mt={3}>
        <AddNote />
      </Box>
    </WithCTAActionTemplate>
  );
};

export default Cart;
