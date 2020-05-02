import styled from "styled-components";
import color from "../../../lib/color";
import { TRANSITION_COLOR } from "../../../lib/defaultStyles";

export const MoviesNavStyled = styled.nav`
  margin: 5vmin 0;
  width: 100%;
`;

export const MoviesNavItemWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const MoviesNavItemStyled = styled.li``;

export const MoviesNavItemCaptionStyled = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 3vmin;
    padding: 1.5vmin 3vmin;
    border-top: 0.5vmin solid transparent;
    border-bottom: 0.5vmin solid transparent;
    transition: border 0.25s ease, ${TRANSITION_COLOR};
    font-weight: 600;
    color: ${color.default.dark};

    &:hover {
      color: ${color.default.normal};
    }

    &.selected {
      color: ${color.default.normal};
      border-top: 0.5vmin solid white;
      border-bottom: 0.5vmin solid white;
    }
  }
`;
