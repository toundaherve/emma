import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, useTheme, makeStyles } from "@material-ui/core";

import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Food from "./pages/Food";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Payment from "./pages/Payment";
// import Modal from "./layouts/Modal";
import ScrollToTop from "./components/ScrollToTop";
import useDeviceType from "./hooks/useDeviceType";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          {/* <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route> */}

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
