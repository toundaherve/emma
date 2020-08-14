import React from "react";
import styled from "styled-components";

const LogoText = styled.h2`
  font-size: 2.125rem;
  font-weight: 500;
  text-align: center;
  padding: 0;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

const Logo = ({ color }) => {
  return (
    <div>
      <LogoText color={color}>Emma's Kitchen</LogoText>
    </div>
  );
};

export default Logo;
