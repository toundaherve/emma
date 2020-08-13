import React from "react";
import styled from "styled-components";
import theme from "../theme";

import Typography from "../components/Typography";
import CardFavorite from "../components/CardFavorite";

const Wrapper = styled.div`
  padding: ${theme.spacing[6]} ${theme.spacing[7]};

  & > h2 {
    margin-bottom: ${theme.spacing[9]};
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  list-style: none;

  & > * {
    flex-basis: 7.75rem;
    min-width: 7.75rem;
    margin-right: ${theme.spacing[7]};
  }
`;

const Favorites = () => {
  return (
    <Wrapper>
      <Typography variant="h2" align="center">
        Emma's Favorites
      </Typography>
      <List>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <li>
            <CardFavorite />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default Favorites;
