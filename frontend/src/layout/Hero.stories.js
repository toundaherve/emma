import React from "react";
import { action } from "@storybook/addon-actions";
import Hero from "./Hero";

export default {
  component: Hero,
  title: "Hero",
};

export const normal = () => <Hero />;
