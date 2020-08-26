import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  menu: menuSlice.reducer,
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
