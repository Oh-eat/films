import styled from "styled-components";

export const PosterStyled = styled.div`
  flex: none;
  height: 100%;
  margin-right: 1rem;
  order: 1;

  /* margin-top: 2rem; */

  /* @media screen and (orientation: landscape) {
    height: 80vh;
  } */

  /* @media screen and (min-width: 768px) {
    height: 40vh;
  } */

  @media screen and (orientation: portrait) {
    margin: 1rem 0 0 0;
    width: 80%;
    order: 2;
    height: auto;
    min-height: 30vh;
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    margin: 1rem 0 0 0;
    height: 60vh;
    order: 2;
  }
`;
