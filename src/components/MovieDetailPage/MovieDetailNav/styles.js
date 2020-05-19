import styled from "styled-components";
import color from "../../../lib/color";
import { TRANSITION_BACKGROUND_COLOR } from "../../../lib/defaultStyles";

export const MovieDetailNavStyled = styled.nav`
  flex: none;
`;

export const NavItemWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-content: space-around;
  flex-wrap: wrap;
`;

export const NavItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  transition: ${TRANSITION_BACKGROUND_COLOR};

  &.selected {
    text-decoration: underline;
  }

  &.disabled {
    color: gray;
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    font-size: 1.25rem;
    padding: 0.5rem 0.75rem;
  }

  @media screen and (hover: hover) {
    &:hover {
      background: ${color.default.background};
    }

    &.disabled:hover {
      background: initial;
    }
  }
`;
