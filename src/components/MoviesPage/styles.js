import styled from "styled-components";
import { Link } from "react-router-dom";
import { FADE_IN, DEFAULT_HORIZONTAL_MARGIN } from "../../lib/defaultStyles";

export const MovieGridStyled = styled.div`
  display: grid;
  grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};

  @media screen and (min-width: 1281px) {
    & {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media screen and (max-width: 1280px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 600px) and (orientation: portrait) {
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

  & > * {
    position: absolute !important;
    top: 0;
    left: 0;
  }

  &:hover {
    box-shadow: 0 0 0 0.5vmin white;

    img {
      /* filter: brightness(0.8); */
    }
  }
`;

export const PosterReplacementStyled = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(45, 45, 45);

  h3 {
    z-index: 1;
    box-sizing: border-box;
    padding: 10%;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* word-break: break-all; */
    font-size: 100%;
    text-align: center;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(60, 60, 60);
  }
`;
