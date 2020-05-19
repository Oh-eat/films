import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../lib/color";
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

  @media screen and (max-width: 567px) {
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
  animation: ${FADE_IN} ${(props) => `${props.index * 0.1}s`} linear;

  & > * {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }

  &:hover {
    box-shadow: 0 0 0 0.5vmin ${color.default.normal};
  }
`;
