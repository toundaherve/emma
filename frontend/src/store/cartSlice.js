import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    updateQuantity(state, action) {
      const line = state.find((line) => line.item.id === action.payload.id);
      line.quantity = action.payload.newQuantity;
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice;
