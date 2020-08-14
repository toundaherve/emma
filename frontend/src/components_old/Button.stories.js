import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

export const normal = () => (
  <div>
    <Button>Action</Button>
  </div>
);
