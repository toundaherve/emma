import React from "react";
import { action } from "@storybook/addon-actions";
import Socials from "./Socials";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid #cccccc;
  margin: 1rem;
`;

export default {
  component: Socials,
  title: "Socials",
};

export const normal = () => (
  <Wrapper>
    <Socials />
  </Wrapper>
);
