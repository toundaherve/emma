import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Food from "./pages/Food";
import useDeviceType from "./hooks/useDeviceType";
import { Box, useTheme, makeStyles } from "@material-ui/core";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Modal from "./layouts/Modal";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Menu /> */}
      {/* <Modal>
        <Food />
      </Modal> */}
      {/* <Checkout /> */}
      <Modal>
        <Payment />
      </Modal>
    </div>
  );
}

export default App;
