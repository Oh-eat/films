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

export const MoviesNavItemStyled = styled.li`
  display: flex;

  .caption {
    font-size: 3vmin;
    line-height: 1;
    padding: 1.5vmin 3vmin;
    border-top: 0.5vmin solid transparent;
    border-bottom: 0.5vmin solid transparent;
    transition: border 0.25s ease, ${TRANSITION_COLOR};
    color: ${color.default.dark};

    &:hover {
      color: ${color.default.normal};
    }

    &.selected {
      color: ${color.default.normal};
      border-top: 0.5vmin solid ${color.default.normal};
      border-bottom: 0.5vmin solid ${color.default.normal};
    }
  }
`;
