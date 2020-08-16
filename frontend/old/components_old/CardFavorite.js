import React from "react";
import styled from "styled-components";
import theme from "../theme";

import Image from "./Image";
import Typography from "./Typography";

const Wrapper = styled.div`
  & > div {
    margin-bottom: ${theme.spacing[9]};
  }
`;

const CardFavorite = () => {
  return (
    <Wrapper>
      <Image />
      <Typography variant="h5" align="center">
        Roasted Chicken
      </Typography>
    </Wrapper>
  );
};

export default CardFavorite;
