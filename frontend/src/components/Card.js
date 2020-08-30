import React from "react";
import { Grid, Typography, Box, Button, makeStyles } from "@material-ui/core";
import Image from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "4px 12px !important",
  },
  title: {
    color: theme.palette.text.primary,
  },
  subtitle: {
    color: theme.palette.text.secondary,
  },
}));

const BaseCard = ({ data, aspectRatio = 16 / 9, render = () => null }) => {
  const classes = useStyles();
  return (
    <div>
      <Image
        src="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
        onClick={() => console.log("onClick")}
        aspectRatio={aspectRatio}
        disableSpinner
      />
      <Box pt={1.5}>
        <Grid container alignItems="flex-end">
          <Grid item xs={9}>
            <Typography variant="h5" className={classes.title}>
              {data.title}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              {data.description.substr(0, 32)}
            </Typography>
          </Grid>
          {render() && (
            <Grid item xs={3}>
              {render()}
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export const SimpleCard = ({ data, aspectRatio }) => {
  return <BaseCard data={data} aspectRatio={aspectRatio} />;
};

export const WithCTACard = ({
  data,
  aspectRatio,
  ctaText = "Default Text",
  onButtonClick = () => {},
}) => {
  const classes = useStyles();
  return (
    <BaseCard
      data={data}
      aspectRatio={aspectRatio}
      render={() => (
        <Button
          variant="contained"
          onClick={onButtonClick}
          className={classes.btn}
        >
          {ctaText}
        </Button>
      )}
    />
  );
};
