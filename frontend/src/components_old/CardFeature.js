import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import theme from "../theme";

import Image from "./Image";

const Wrapper = styled.div`
  & > div {
    margin-bottom: ${theme.spacing[8]};
  }

  & > h2 {
    margin-bottom: ${theme.spacing[10]};
  }
`;

const CardFeature = () => {
  return (
    <Wrapper>
      <Image ratio={183 / 328} />
      <Typography variant="h2" align="center">
        Homemade with love
      </Typography>
      <Typography variant="body" align="center">
        With finest quality ingredients
      </Typography>
    </Wrapper>
  );
};

export default CardFeature;
