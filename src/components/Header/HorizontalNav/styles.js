import styled from "styled-components";
import color from "../../../lib/color";
import {
  TRANSITION_BACKGROUND_COLOR,
  TRANSITION_TRANSFORM,
} from "../../../lib/defaultStyles";

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

  .caption {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    transition: ${TRANSITION_BACKGROUND_COLOR};
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateZ(-90deg);
    transition: ${TRANSITION_TRANSFORM};

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

  @media screen and (hover: hover) {
    .caption:hover {
      background: ${color.default.background};
    }
  }
`;

export const NavItemWrapper = styled.ul``;

export const NavItemStyled = styled.li`
  font-size: 1.25rem;
`;

export const SubnavIemWrapper = styled.ul``;

export const SubnavItemStyled = styled.li`
  font-size: 1.1rem;
`;
