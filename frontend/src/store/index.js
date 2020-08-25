import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const rootReducer = combineReducers({
  menu: menuSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
