import React from "react";
import styled from "styled-components";

import theme from "../theme";

const Input = styled.input`
  background-color: #ffffff;
  padding: ${theme.spacing[7]} ${theme.spacing[7]};
  color: #000000;
  font-size: 1rem;
  border-color: #cccccc;
  outline-color: #cccccc;

  &:focus {
    outline-color: #000000;
  }
`;

export default Input;
