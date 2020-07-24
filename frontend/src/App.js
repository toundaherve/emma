import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/menu">
            <MenuPage />
          </Route>

          <Route path="/item">
            <ItemPage />
          </Route>

          <Route path="/cart">
            <CartPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
