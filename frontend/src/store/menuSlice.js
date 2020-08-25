import { createSlice } from "@reduxjs/toolkit";

export const status = {
  loading: "loading",
  error: "error",
  loaded: "loaded",
};

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    mains: ["n/a", "n/a", "n/a", "n/a", "n/a", "n/a"],
    entrees: ["n/a", "n/a", "n/a"],
    wines: ["n/a", "n/a", "n/a"],
    status: status.loading,
  },
  reducers: {
    setMenu(state, action) {
      state.mains = action.payload.mains;
      state.entrees = action.payload.entrees;
      state.wines = action.payload.wines;
      state.status = action.payload.status;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice;
