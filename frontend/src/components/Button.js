import React from "react";
import styled from "styled-components";
import Typography from "./Typography";

import theme from "../theme";

const Button = styled.button`
  background-color: #000000;
  padding: ${theme.spacing[8]} ${theme.spacing[7]};
  border: none;
  box-sizing: border-box;
`;

export default () => {
  return (
    <Button>
      <Typography variant="button" color="#FFFFFF">
        Order Now
      </Typography>
    </Button>
  );
};
