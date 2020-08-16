import React from "react";
import Typography from "./Typography";

export default {
  component: Typography,
  title: "Typography",
};

export const all = () => (
  <div>
    <Typography variant="h1">Heading1</Typography>
    <Typography variant="h2">Heading2</Typography>
    <Typography variant="h3">Heading3</Typography>
    <Typography variant="h4">Heading4</Typography>
    <Typography variant="h5">Heading5</Typography>
    <Typography variant="body">Body</Typography>
    <Typography variant="button">Button</Typography>
    <br />
    <Typography variant="caption">Caption</Typography>
  </div>
);

export const align = () => (
  <div>
    <Typography>Default</Typography>
    <Typography align="Left">Left</Typography>
    <Typography align="center">Centered</Typography>
    <Typography align="right">Right</Typography>
  </div>
);
