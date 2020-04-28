import styled from "styled-components";
import color from "../../../../../lib/color";

export const SideBarStyled = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  right: 0;
  width: 15rem;
  height: 100vh;
  background-color: rgb(60, 60, 60);
  transform: translateX(100%);
  transition: transform 0.5s ease;
  color: white;

  &.visible {
    transform: translateX(0);
  }
`;

export const Closer = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
`;

export const MenuWrapperStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuStyled = styled.li`
  width: 100%;
  transition: background-color 0.25s ease;
  cursor: pointer;

  .caption {
    display: flex;
    height: 4rem;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
    width: auto;
    font-size: 1.25rem;
    letter-spacing: 1px;
    transition: background-color 0.25s ease;

    a {
      flex: 1;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .arrow {
      transition: transform 0.25s ease;

      &.selected {
        transform: rotateX(180deg);
      }
    }

    &:hover {
      background-color: ${color.default.background};
    }
  }

  & + & {
    border-top: 1px solid gray;
  }
`;

export const SubmenuWrapperStyled = styled.ul`
  height: 0;
  overflow-y: hidden;
  transition: height 0.25s ease;

  &.visible {
    height: ${(props) => `${props.itemCount * 3}rem`};
  }
`;

export const SubmenuStyled = styled.li`
  width: 100%;

  .caption {
    font-size: 1rem;
    width: 100%;
    height: 3rem;
    padding: 0;
  }

  a {
    box-sizing: border-box;
    padding: 0 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
