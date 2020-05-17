import styled from "styled-components";
import { TRANSITION_BACKGROUND_COLOR } from "../../../lib/defaultStyles";
import color from "../../../lib/color";

export const HorizontalNavStyled = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  ul {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    transition: max-width 0.5s ease;
  }

  li {
    display: flex;
    height: 100%;
  }

  span,
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    transition: ${TRANSITION_BACKGROUND_COLOR};
    padding: 0 1rem;

    &:hover {
      background: ${color.default.background};
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateZ(-90deg);
    transition: transform 0.25s ease;

    &.selected {
      transform: rotateZ(90deg);
    }
  }

  button {
    box-sizing: content-box !important;
    border-radius: 0 !important;
    border: none !important;
    padding: 0 1rem !important;
    margin: 0 !important;
    height: 100% !important;
  }
`;

export const NavItemWrapper = styled.ul`
  font-size: 1.25rem;
`;

export const NavItemStyled = styled.li``;

export const SubnavIemWrapper = styled.ul`
  font-size: 1rem;
  font-weight: 300;
`;

export const SubnavItemStyled = styled.li``;
