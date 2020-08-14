import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import CardFavorite from "./CardFavorite";

export default {
  component: CardFavorite,
  title: "CardFavorite",
};

const Wrapper = styled.div`
  width: 124px;
  height: 124px;
`;

export const normal = () => (
  <Wrapper>
    <CardFavorite />
  </Wrapper>
);
