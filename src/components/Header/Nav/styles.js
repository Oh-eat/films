import styled, { css } from "styled-components";
import {
  TRANSITION_BACKGROUND_COLOR,
  TRANSITION_HEIGHT,
  TRANSITION_COLOR,
} from "../../../lib/defaultStyles";
import color from "../../../lib/color";

export const CaptionStyle = css`
  font-weight: 100;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 1px;
  transition: ${TRANSITION_BACKGROUND_COLOR};

  a {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: ${color.default.background};
  }
`;

export const NavItemWrapper = styled.ul`
  display: flex;
`;

export const NavItemStyled = styled.li`
  position: relative;
  cursor: pointer;
`;

export const NavItemCaptionStyled = styled.h2`
  ${CaptionStyle}
`;

export const SubnavItemWrapper = styled.ul`
  min-width: 100%;
  height: 0;
  overflow-y: hidden;
  transition: ${TRANSITION_HEIGHT}, ${TRANSITION_COLOR};

  &.visible {
    height: ${(props) => `${props.itemCount * 2.5}rem`};
  }
`;

export const SubnavItemStyled = styled.li``;

export const SubnavItemCaptionStyled = styled.h3`
  ${CaptionStyle}
  font-size: 1.25rem;
  height: 2rem;
`;
