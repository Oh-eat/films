import styled, { keyframes } from "styled-components";

const likeKeyframes = keyframes`
  from {
    box-shadow: 0 0 2rem rgba(255, 0, 0, 1);
  }
  to {
    box-shadow: 0 0 4rem rgba(255, 0, 0, 0);
  }
`;

const watchlistKeyframes = keyframes`
  from {
    box-shadow: 0 0 2rem rgba(255, 255, 0, 1);
  }
  to {
    box-shadow: 0 0 4rem rgba(255, 255, 0, 0);
  }
`;

export const ButtonsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;

  & > a,
  & > button {
    margin: 0 0.1rem;
  }

  .like:focus {
    animation: ${likeKeyframes} 1s alternate;
  }

  .watchlist:focus {
    animation: ${watchlistKeyframes} 1s alternate;
  }
`;
