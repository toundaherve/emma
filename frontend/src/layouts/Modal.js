import React from "react";
import {
  Grid,
  Modal as MuiModal,
  Box,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import useDeviceType from "../hooks/useDeviceType";
import CloseBtn from "../components/CloseBtn";
import ScrollToTop from "../components/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute !important",
  },
}));

const Modal = ({
  showModal,
  contentMaxWidth = "676px",
  contentMaxHeight = "auto",
  children,
}) => {
  const isTablet = useDeviceType("tablet");
  const theme = useTheme();
  const classes = useStyles();
  return isTablet ? (
    <MuiModal
      open
      disableScrollLock={true}
      className={classes.modal}
      onBackdropClick={() => showModal(false)}
    >
      <Box
        maxWidth={contentMaxWidth}
        minHeight={contentMaxHeight}
        mt={10}
        mb={10}
        margin="0 auto"
        position="relative"
        bgcolor={theme.palette.common.white}
      >
        <ContentWrapper handleClose={() => showModal(false)}>
          {children}
        </ContentWrapper>
      </Box>
    </MuiModal>
  ) : (
    <ContentWrapper handleClose={() => showModal(false)}>
      {children}
    </ContentWrapper>
  );
};

const ContentWrapper = ({ children, handleClose }) => {
  return (
    <>
      <ScrollToTop />
      <CloseBtn onClick={handleClose} />
      <Box height="48px" />
      {children}
    </>
  );
};

export default Modal;
