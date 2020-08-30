import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: theme.palette.background.default,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ScrollToTop />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
