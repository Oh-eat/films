import styled from "styled-components";
import {
  MenuWrapperStyled,
  MenuItemStyled,
  MenuItemCaptionStyled,
  SubmenuWrapperStyled,
  SubmenuItemStyled,
  SubmenuItemCaptionStyled,
} from "../../Menu/styles";

export const HorizontalNavStyled = styled.nav`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HorizontalMenuWrapperStyled = styled(MenuWrapperStyled)``;

export const HoverableMenuItemStyled = styled(MenuItemStyled)``;

export const HorizontalMenuItemCaptionStyled = styled(MenuItemCaptionStyled)`
  cursor: default;
  width: 7rem;
  height: 3rem;
`;

export const HoverableSubmenuWrapperStyled = styled(SubmenuWrapperStyled)`
  position: absolute;
  color: transparent;

  &.visible {
    color: inherit;
  }
`;

export const HoverableSubmenuItemStyled = styled(SubmenuItemStyled)``;

export const HorizontalSubmenuItemCaptionStyled = styled(
  SubmenuItemCaptionStyled
)`
  height: 2.5rem;
`;
