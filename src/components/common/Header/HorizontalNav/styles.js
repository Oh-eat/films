import styled from "styled-components";
import color from "../../../../lib/color";

const ListItemStyled = styled.li`
  cursor: pointer;
  position: relative;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuWrapperStyled = styled.ul`
  display: flex;
`;

export const MenuStyled = styled(ListItemStyled)`
  width: 7rem;
  height: 2.5rem;

  .caption {
    display: flex;
    cursor: default;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    letter-spacing: 1px;
    transition: background-color 0.25s ease;

    &:hover {
      background-color: ${color.default.background};
    }
  }
`;

// export const ButtonMenuStyled = styled(MenuStyled)``;

// export const HoverableMenuStyled = styled(MenuStyled)``;

export const SubmenuWrapperStyled = styled.ul`
  position: absolute;
  min-width: 100%;
  height: 0;
  color: transparent;
  overflow-y: hidden;
  transition: height 0.5s ease, color 0.25s ease;

  &.visible {
    color: inherit;
    height: ${(props) => `${props.itemCount * 2}rem`};
  }
`;

export const SubmenuStyled = styled(ListItemStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: ${color.default.background};
  }
`;
