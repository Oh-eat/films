import styled from "styled-components";
import { TRANSITION_BACKGROUND_COLOR } from "../../../lib/defaultStyles";
import color from "../../../lib/color";

export const MovieDetailNavStyled = styled.nav`
  height: 1.5rem;

  @media screen and (max-width: 567px) {
    height: 4rem;
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    height: 2.5rem;
  }
`;

export const NavItemWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const NavItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  transition: ${TRANSITION_BACKGROUND_COLOR};

  &:hover {
    background: ${color.default.background};
  }

  &.selected {
    text-decoration: underline;
  }

  &.disabled {
    color: gray;

    &:hover {
      background: none;
    }
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    font-size: 1.25rem;
    padding: 0.25rem 0.75rem;
  }
`;