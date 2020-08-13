import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "./Input";

export default {
  component: Input,
  title: "Input",
};

export const normal = () => <Input placeholder="Enter postcode" type="text" />;
