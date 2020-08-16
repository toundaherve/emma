import React from "react";
import styled from "styled-components";
import theme from "../theme";
import CardFeature from "../components/CardFeature";

const Wrapper = styled.div`
  & > * {
    margin-bottom: ${theme.spacing[5]};
  }
`;

const Features = () => {
  return (
    <Wrapper>
      <CardFeature />
      <CardFeature />
    </Wrapper>
  );
};

export default Features;
