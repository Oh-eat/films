import styled, { css } from "styled-components";
import color from "../../../../lib/color";
import {
  TRANSITION_BACKGROUND_COLOR,
  TRANSITION_HEIGHT,
  TRANSITION_COLOR,
} from "../../../../lib/defaultStyles";

export const Fullscreen = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;

  &.visible {
    display: block;
  }
`;

export const SideBarStyled = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  width: 15rem;
  height: 100%;
  background-color: rgb(50, 50, 50);
  transform: translateX(100%);
  transition: transform 0.5s ease;
  overflow-y: auto;

  &.visible {
    transform: translateX(0);
  }
`;

const CaptionStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 1rem;
  height: 4rem;
  width: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: ${TRANSITION_BACKGROUND_COLOR};

  .arrow {
    transition: transform 0.25s ease;

    &.selected {
      transform: rotateX(180deg);
    }
  }

  &:hover {
      background: ${color.default.background};
    }

  /* @media screen and (hover: hover) {
    &:hover {
      background: ${color.default.background};
    }
  } */
`;

export const Closer = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
`;

export const VerticalNavItemWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > li + li {
    border-top: 1px solid ${color.default.background};
  }
`;

export const VerticalNavItemStyled = styled.li`
  width: 100%;

  .caption {
    ${CaptionStyle}
  }
`;

export const ButtonNavItemStyled = styled(VerticalNavItemStyled)``;

export const DropdownNavItemStyled = styled(VerticalNavItemStyled)`
  .caption {
    justify-content: space-between;
  }
`;

export const VerticalSubnavItemWrapper = styled.ul`
  min-width: 100%;
  height: 0;
  overflow-y: hidden;
  transition: ${TRANSITION_HEIGHT}, ${TRANSITION_COLOR};

  &.visible {
    height: ${(props) => `${props.itemCount * 3}rem`};
  }
`;

export const VerticalSubnavItemStyled = styled.li`
  .caption {
    height: 3rem;
    justify-content: flex-end;
    font-size: 1.25rem;
  }
`;
