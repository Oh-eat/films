import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../../lib/defaultStyles";

export const MoviesPageBodyStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieGridStyled = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: min(2vw, 2vh);

  @media (max-width: 1280px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const MovieItemStyled = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: box-shadow 0.25s ease;
  /* transition: opacity 0.25s ease; */
  animation: ${fadeIn} ${(props) => `${props.index * 0.1}s`} linear;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    /* transition: filter 0.25s ease; */
  }

  &:hover {
    box-shadow: 0 0 0 min(0.5vw, 0.5vh) white;

    img {
      /* filter: brightness(0.8); */
    }
  }
`;
