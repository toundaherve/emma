import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import CardFeature from "./CardFeature";

export default {
  component: CardFeature,
  title: "CardFeature",
};

const Wrapper = styled.div`
  padding: 1rem;
`;

export const normal = () => (
  <Wrapper>
    <CardFeature />
  </Wrapper>
);
