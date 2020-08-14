import React from "react";
import styled from "styled-components";
import theme from "../theme";

import Typography from "../components/Typography";
import Input from "../components/Input";
import Button from "../components/Button";

const OuterWrapper = styled.div`
  height: calc(100vh - 4.5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;

  & > * {
    width: 20.5rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  & > * {
    flex-basis: 100%;
  }

  & > h1 {
    margin-bottom: ${(props) => (props.noMarginBottom ? 0 : theme.spacing[6])};
  }

  & > input {
    margin-bottom: ${theme.spacing[7]};
  }
`;

const Hero = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Typography variant="h1" align="center">
          Fresh and Tasty homemade food
        </Typography>
        <Input placeholder="Enter postcode" />
        <Button>Order Now</Button>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Hero;
