import React from "react";
import styled from "styled-components";
import theme from "../theme";

import Logo from "../components/Logo";
import Socials from "../components/Socials";
import Navigation from "../components/Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing[4]};
  padding: ${theme.spacing[4]} ${theme.spacing[7]} ${theme.spacing[2]}
    ${theme.spacing[7]};
  background-color: #000000;

  & > * {
    margin-bottom: ${theme.spacing[4]};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Logo color="#FFFFFF" />
      <Socials />
      <Navigation />
    </Wrapper>
  );
};

export default Footer;
