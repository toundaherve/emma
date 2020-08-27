import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    updateQuantity(state, action) {
      if (action.payload.newQuantity === 0) {
        const oldCart = [...state];
        while (state.length > 0) {
          state.pop();
        }
        oldCart.forEach((line) => {
          if (line.item.id !== action.payload.id) {
            state.push(line);
          }
        });
      } else {
        const line = state.find((line) => line.item.id === action.payload.id);
        line.quantity = action.payload.newQuantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice;
