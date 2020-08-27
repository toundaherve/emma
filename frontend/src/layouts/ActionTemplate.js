import React from "react";
import { Box, Typography, makeStyles, TextField } from "@material-ui/core";

import Button from "../components/Button";
import useDeviceType from "../hooks/useDeviceType";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const BaseActionTemplate = ({
  title,
  children,
  render = () => null,
  fullHeight,
}) => {
  const isCheckoutPage = useLocation().pathname === "/checkout";
  const classes = useStyles();
  const rootHeight = fullHeight ? "100vh" : "calc(100vh - 80px - 40px)";
  return (
    <Box
      pt={isCheckoutPage ? 12 : 8}
      pl={2}
      pr={2}
      className={classes.root}
      minHeight={rootHeight}
    >
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

export const SimpleActionTemplate = ({ children, ...rest }) => {
  return <BaseActionTemplate {...rest}>{children}</BaseActionTemplate>;
};

export const WithCTAActionTemplate = ({
  children,
  ctaText = "Default text",
  onButtonClick = () => {},
  ...rest
}) => {
  const isTablet = useDeviceType("tablet");

  return (
    <BaseActionTemplate
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
      {...rest}
    >
      {children}
    </BaseActionTemplate>
  );
};

const AddNote = () => {
  return (
    <TextField
      id="note-textarea"
      label="Add a note for Emma"
      multiline
      fullWidth
      variant="filled"
    />
  );
};

export const WithCTAActionAndNoteTemplate = ({
  children,
  ctaText = "Default text",
  onButtonClick = () => {},
  ...rest
}) => {
  const isTablet = useDeviceType("tablet");

  return (
    <BaseActionTemplate
      render={() => (
        <div>
          <Box mt={3}>
            <AddNote />
          </Box>
          <Box pt={3} pb={4} position="sticky" bottom="0" zIndex="99">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={onButtonClick}
            >
              {ctaText}
            </Button>
          </Box>
        </div>
      )}
      {...rest}
    >
      {children}
    </BaseActionTemplate>
  );
};
