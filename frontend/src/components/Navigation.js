import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import theme from "../theme";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${theme.spacing[7]};
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Typography variant="body" align="center" color="#FFFFFF">
        About Emma's Kitchen
      </Typography>
      <Typography variant="body" align="center" color="#FFFFFF">
        Privacy Policy
      </Typography>
      <Typography variant="body" align="center" color="#FFFFFF">
        Terms and Conditions
      </Typography>
      <Typography variant="body" align="center" color="#FFFFFF">
        © 2020 Emma’s Kitchen All Rights Reserved
      </Typography>
    </Wrapper>
  );
};

export default Navigation;
