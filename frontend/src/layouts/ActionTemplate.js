import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

import Button from "../components/Button";
import useDeviceType from "../hooks/useDeviceType";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    minHeight: "calc(100vh - 80px - 40px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const BaseActionTemplate = ({ title, children, render = () => null }) => {
  const isCheckoutPage = useLocation().pathname === "/checkout";
  const classes = useStyles();
  return (
    <Box pt={isCheckoutPage ? 12 : 8} pl={2} pr={2} className={classes.root}>
      <div>
        <Box mb={3}>
          <Typography variant="h4">{title}</Typography>
        </Box>

        <div>{children}</div>
      </div>

      {render()}
    </Box>
  );
};

export const SimpleActionTemplate = ({ title, children }) => {
  return <BaseActionTemplate title={title}>{children}</BaseActionTemplate>;
};

export const WithCTAActionTemplate = ({
  title,
  children,
  ctaText = "Default text",
  onButtonClick = () => {},
}) => {
  const isTablet = useDeviceType("tablet");

  return (
    <BaseActionTemplate
      title={title}
      render={() => (
        <Box pt={3} pb={4} position="sticky" bottom="0">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onButtonClick}
          >
            {ctaText}
          </Button>
        </Box>
      )}
    >
      {children}
    </BaseActionTemplate>
  );
};
