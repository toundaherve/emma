import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import CloseBtn from "../components/CloseBtn";
import { Select } from "../components/Inputs";
import Button from "../components/Button";
import Divider from "../components/Divider";

const itemsData = [1, 2, 3, 4, 5];

const OrderItem = () => {
  return (
    <Grid item container justify="space-between" spacing={8}>
      {/* ------------------------ Quantity --------------------- */}
      <Grid item xs={2}>
        <Select />
      </Grid>

      {/* ------------------------ Name and Extras--------------------- */}
      <Grid item xs={6} container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="body1">Roasted Chicken</Typography>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="body2">Add Extra</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Fries</Typography>
            <Typography variant="body2">Chilli</Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* ------------------------ Price --------------------- */}
      <Grid item xs={4}>
        <Typography variant="body1" align="right">
          £ 5.99
        </Typography>
      </Grid>
    </Grid>
  );
};

const Cart = () => {
  const theme = useTheme();
  return (
    <Box pt={8} pl={2} pr={2} mb={3}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <CloseBtn />
        </Grid>

        {/* ------------------------ Title --------------------- */}
        <Grid item xs={12}>
          <Typography variant="h4">Your order</Typography>
        </Grid>

        {/* ------------------------ Items List --------------------- */}
        <Grid item xs={12} container direction="column">
          {itemsData.map((n, idx) => (
            <>
              <OrderItem />
              {itemsData.length != idx + 1 && <Divider />}
            </>
          ))}
        </Grid>

        {/* ------------------------ Note --------------------- */}
        <Grid item xs={12}>
          <TextField
            id="note-textarea"
            label="Add a note for Emma"
            multiline
            fullWidth
            variant="filled"
          />
        </Grid>

        {/* ------------------------ Checkout Btn --------------------- */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Next: Checkout (£ 15.75)
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
