import styled from "styled-components";
import {
  MenuItemCaptionStyled,
  MenuItemStyled,
  SubmenuItemStyled,
  SubmenuWrapperStyled,
  SubmenuItemCaptionStyled,
} from "../../../Menu/styles";

export const Fullscreen = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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
  height: 100vh;
  background-color: rgb(50, 50, 50);
  transform: translateX(100%);
  transition: transform 0.5s ease;
  color: white;
  overflow-y: auto;

  &.visible {
    transform: translateX(0);
  }
`;

export const Closer = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
`;

export const VerticalMenuWrapperStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VerticalMenuItemStyled = styled(MenuItemStyled)`
  width: 100%;

  & + & {
    border-top: 1px solid gray;
  }
`;

export const VerticalMenuItemCaptionStyled = styled(MenuItemCaptionStyled)`
  height: 4rem;
  justify-content: ${(props) => (props.dropdown ? "space-between" : "center")};
  padding: ${(props) => (props.dropdown ? "0 1rem" : 0)};

  a {
    padding: 0 1rem;
    justify-content: flex-end;
  }

  .arrow {
    transition: transform 0.25s ease;

    &.selected {
      transform: rotateX(180deg);
    }
  }
`;

export const VerticalSubmenuWrapperStyled = styled(SubmenuWrapperStyled)`
  &.visible {
    height: ${(props) => `${props.itemCount * 3}rem`};
  }
`;

export const VerticalSubmenuItemStyled = styled(SubmenuItemStyled)``;

export const VerticalSubmenuItemCaptionStyled = styled(
  SubmenuItemCaptionStyled
)`
  width: 100%;
  height: 3rem;

  a {
    padding: 0 1rem;
    justify-content: flex-end;
  }
`;
