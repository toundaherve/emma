import React from "react";
import { action } from "@storybook/addon-actions";
import Favorites from "./Favorites";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #cccccc;
  margin: 1rem;
`;

export default {
  component: Favorites,
  title: "Favorites",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const normal = () => <Favorites />;
