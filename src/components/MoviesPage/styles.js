import styled from "styled-components";
import { Link } from "react-router-dom";
import { FADE_IN, DEFAULT_HORIZONTAL_MARGIN } from "../../lib/defaultStyles";

export const MovieGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};

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
  position: relative;
  width: 100%;
  padding-top: 150%;
  opacity: 0;
  transition: box-shadow 0.25s ease;
  /* transition: opacity 0.25s ease; */
  animation: ${FADE_IN} ${(props) => `${props.index * 0.1}s`} linear;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    /* transition: filter 0.25s ease; */
  }

  &:hover {
    box-shadow: 0 0 0 0.5vmin white;

    img {
      /* filter: brightness(0.8); */
    }
  }
`;
