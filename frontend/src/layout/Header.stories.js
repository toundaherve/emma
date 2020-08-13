import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "./Header";

export default {
  component: Header,
  title: "Header",
};

export const normal = () => <Header />;
