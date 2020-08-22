import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

import Button from "../components/Button";
import useDeviceType from "../hooks/useDeviceType";

const BaseActionTemplate = ({ title, children, render = () => null }) => {
  return (
    <Box pt={8} pl={2} pr={2}>
      <Box mb={3}>
        <Typography variant="h4">{title}</Typography>
      </Box>

      <div>{children}</div>

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
        <Box
          pt={3}
          pl={2}
          pr={2}
          pb={4}
          position="sticky"
          bottom={isTablet ? "0px" : "-52px"}
        >
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
