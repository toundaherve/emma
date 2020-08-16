import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Food from "./pages/Food";
import useDeviceType from "./hooks/useDeviceType";
import { Modal, Box, useTheme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute !important",
  },
}));

function App() {
  const isTablet = useDeviceType("tablet");
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Menu /> */}
      {isTablet ? (
        <Modal open disableScrollLock={true} className={classes.modal}>
          <Box
            maxWidth="676px"
            mt={10}
            mb={10}
            margin="0 auto"
            position="relative"
            bgcolor={theme.palette.common.white}
          >
            <Food />
          </Box>
        </Modal>
      ) : (
        <Food />
      )}
    </div>
  );
}

export default App;
