import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

import theme from "../theme";

const Header = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 0 ${theme.spacing[7]};
`;

export default () => {
  return (
    <Header>
      <Logo />
    </Header>
  );
};
