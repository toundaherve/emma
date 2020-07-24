import React from "react";
import "./App.css";

import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
  return (
    <div id="app">
      {/* <HomePage /> */}
      {/* <MenuPage /> */}
      {/* <ItemPage /> */}
      <CartPage />
    </div>
  );
}

export default App;
