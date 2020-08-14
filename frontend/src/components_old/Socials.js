import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import theme from "../theme";

const Wrapper = styled.div`
  display: flex;
  background-color: #000000;

  & > svg:first-child {
    margin-right: ${theme.spacing[6]};
  }
`;

const Socials = () => {
  return (
    <Wrapper>
      <FaFacebookSquare color="#FFFFFF" />
      <FaInstagram color="#FFFFFF" />
    </Wrapper>
  );
};

export default Socials;
