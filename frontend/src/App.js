import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
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
      </Provider>
    </Router>
  );
}

export default App;
