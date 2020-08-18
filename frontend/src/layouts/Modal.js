import React from "react";
import {
  Modal as MuiModal,
  Box,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import useDeviceType from "../hooks/useDeviceType";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute !important",
  },
}));

const Modal = ({ children }) => {
  const isTablet = useDeviceType("tablet");
  const theme = useTheme();
  const classes = useStyles();
  return isTablet ? (
    <MuiModal open disableScrollLock={true} className={classes.modal}>
      <Box
        maxWidth="676px"
        mt={10}
        mb={10}
        margin="0 auto"
        position="relative"
        bgcolor={theme.palette.common.white}
      >
        {children}
      </Box>
    </MuiModal>
  ) : (
    children
  );
};

export default Modal;
