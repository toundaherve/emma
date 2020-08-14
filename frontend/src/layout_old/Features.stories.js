import React from "react";
import { action } from "@storybook/addon-actions";
import Features from "./Features";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #cccccc;
  margin: 1rem;
`;

export default {
  component: Features,
  title: "Features",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const normal = () => <Features />;
