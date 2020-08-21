import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import Image from "material-ui-image";

const BaseCard = ({ data, aspectRatio = 16 / 9, render = () => null }) => {
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
            <Typography variant="h5">{data.title}</Typography>
            <Typography variant="body1">{data.description}</Typography>
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
  onClick = () => {},
}) => {
  return (
    <BaseCard
      data={data}
      aspectRatio={aspectRatio}
      render={() => (
        <Button variant="outlined" color="primary" onClick={onClick}>
          {ctaText}
        </Button>
      )}
    />
  );
};
