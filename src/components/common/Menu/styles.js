import styled, { css } from "styled-components";
import {
  transitionBackgroundColor,
  transitionHeight,
  transitionColor,
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
  transition: ${transitionBackgroundColor};

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

export const MenuWrapperStyled = styled.ul`
  display: flex;
`;

export const MenuItemStyled = styled.li`
  position: relative;
  cursor: pointer;
`;

export const MenuItemCaptionStyled = styled.h2`
  ${CaptionStyle}
`;

export const SubmenuWrapperStyled = styled.ul`
  min-width: 100%;
  height: 0;
  overflow-y: hidden;
  transition: ${transitionHeight}, ${transitionColor};

  &.visible {
    height: ${(props) => `${props.itemCount * 2.5}rem`};
  }
`;

export const SubmenuItemStyled = styled.li``;

export const SubmenuItemCaptionStyled = styled.h3`
  ${CaptionStyle}
  font-size: 1.25rem;
  height: 2rem;
`;
